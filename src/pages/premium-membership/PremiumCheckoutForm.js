import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import useTime from '../../hooks/useTime';

const PremiumCheckoutForm = ({ choosenCategory }) => {
  const [error, setError] = useState('');
const navigate=useNavigate();
  const stripe = useStripe();
  const elements = useElements();
const {date}=useTime();
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();


    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    
    const invoice={
      invoiceName:"Appointment Fee",
      category:{...choosenCategory},
      paymentMethod,
      amount:parseFloat(choosenCategory.amount),
      purchasedDate:date
    }
    if (error) {
      setError(error.message);
    } else {
      
        fetch(`https://floating-basin-02241.herokuapp.com/allInvoices`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(invoice)
        })
          .then(res => res.json())
          .then(data => {

            if (data.insertedId) {
              alert("Congratulations! You are a Premium Member Now");
              navigate("/")
            }
          })
      
    }

  };
  return (
    <form onSubmit={handleSubmit} className="mt-5">
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
     {error&&<p className="my-3">{error}</p>}
            <button
                 type="submit" className="btn-diagnosis-pay my-5" disabled={!stripe}
            >
                Pay
            </button>
    </form>
  );
};

export default PremiumCheckoutForm;