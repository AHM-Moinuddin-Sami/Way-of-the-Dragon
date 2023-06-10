import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    const { id } = useParams();

    console.log(id);

    const { data: paymentClass = [] } = useQuery({
        queryKey: ['paymentClass'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/classes/all/${id}`)
            return res.data;
        }
    })

    console.log(paymentClass);

    return (
        <div>
            <h2 className="text-3xl">Complete payment for {paymentClass.name} class</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm paymentClass={paymentClass} price={paymentClass.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;