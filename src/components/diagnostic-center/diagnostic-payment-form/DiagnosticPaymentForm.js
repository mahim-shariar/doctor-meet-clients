import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {  useNavigate } from 'react-router-dom';

const DiagnosticPaymentForm = ({diagnostic}) => {
    const stripe = useStripe();
    const elements = useElements();
const navigate=useNavigate();
const [error,setError]=useState('');

const intPrice=diagnostic?.selectedDiagnosis?.price;
const intDiscount=diagnostic?.selectedDiagnosis?.discount;
  const floatDiscount=parseFloat(intDiscount).toFixed(2);
  
  const dd=floatDiscount/100.00;
  // console.log(intPrice,dd);
const floatPrice=intPrice-(intPrice*dd);

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
            type: "card",
            card,
        });
        const invoice={
          category:{...diagnostic},
          paymentMethod,
          amount:floatPrice
        }
    if (error) {
      setError(error.message);
    } else {
      if(paymentMethod.id){
        fetch(`https://floating-basin-02241.herokuapp.com/bookedDiagnosis/${diagnostic._id}`,{
          method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.acknowledged){
            fetch(`http://localhost:5000/allInvoices`, {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(invoice)
          })
              .then(res=>res.json())
              .then(data=>{
                
                if(data.insertedId){
                  alert("Successfully paid");
                  navigate('/');
                }
              })
          }
       
          
        })
       
      }
    }

  };
    return (
        <form onSubmit={handleSubmit} className="my-5">
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
      {error&&<p className='mt-3'>{error}</p>}
      <button type="submit" className="btn-diagnosis-pay mt-5" disabled={!stripe}>
        Pay
      </button>
    </form>
    ); 
};

export default DiagnosticPaymentForm;
