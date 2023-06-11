import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ paymentClass, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();
    const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    console.log(stripe, clientSecret, processing)


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        const payloadPaymentCheck = {
            id: paymentClass._id,
            email: user.email
        };

        axiosSecure.post('/payments/check', payloadPaymentCheck)
            .then(res => {
                console.log(res.data.error);
                if (res.data.error) {
                    // display confirm
                    console.log('inside the if');
                    setAlreadyEnrolled(true);
                    Swal.fire({
                        icon: 'error',
                        title: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(-1);
                    // return;
                }
            })

        if (alreadyEnrolled) {
            setProcessing(true)

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            email: user?.email || 'unknown',
                            name: user?.displayName || 'anonymous'
                        },
                    },
                },
            );

            if (confirmError) {
                console.log(confirmError);
            }

            console.log('payment intent', paymentIntent)
            setProcessing(false)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                console.log("PAYMENT SUCCEEDED!!!");
                // save payment information to the server
                // const enrolledPayload = {

                // };
                const payloadPaymentInsert = {
                    id: paymentClass._id,
                    email: user.email,
                    name: user.displayName,
                    price: price,
                    className: paymentClass.name,
                    transactionId: paymentIntent.id,
                    date: new Date()
                };
                axiosSecure.post('/payments', payloadPaymentInsert)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.docInsertResult.modifiedCount > 0 && res.data.deleteResult.modifiedCount > 0 && res.data.payloadPaymentInsert) {
                            // display confirm
                            Swal.fire({
                                icon: 'success',
                                title: `Payment complete for ${paymentClass.name}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: `Error regarding payment for ${paymentClass.name}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        }


    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;