import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;