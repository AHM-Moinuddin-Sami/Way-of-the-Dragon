import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../../SharedComponents/Section Title/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    const { id } = useParams();

    const { data: paymentClass = [] } = useQuery({
        queryKey: ['paymentClass'],
        queryFn: async () => {
            const res = await axios.get(`https://way-of-the-dragon-server.vercel.app/classes/all/${id}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle title={"Payment"}></SectionTitle>
            <h2 className="text-3xl text-center">Complete payment for {paymentClass.name} class</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm paymentClass={paymentClass} price={paymentClass.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;