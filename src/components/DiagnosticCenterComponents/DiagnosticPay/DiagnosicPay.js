import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useParams } from "react-router-dom";
import DiagnosticPaymentForm from "../DiagnosticPaymentForm/DiagnosticPaymentForm";
const stripePromise = loadStripe(
    "pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt"
);

const DiagnosicPay = () => {
    const [diagnostic, setDiagnostic] = useState({});
    const params = useParams();
    
  useEffect(()=>{
    fetch(`http://localhost:5000/bookedDiagnosis/${params.id}`)
    .then(res=>res.json())
    .then(data=>setDiagnostic(data))
  },[params])
  const intPrice=diagnostic?.selectedDiagnosis?.price;
    const intDiscount=diagnostic?.selectedDiagnosis?.discount;
      const floatDiscount=parseFloat(intDiscount).toFixed(2);
      
      const dd=floatDiscount/100.00;
      // console.log(intPrice,dd);
  const floatPrice=intPrice-(intPrice*dd);
  console.log(diagnostic);

    return (
        <div>
            <div className="container">
                <h3>Pay : $ {floatPrice}</h3>
                <Elements stripe={stripePromise}>
                    <DiagnosticPaymentForm diagnostic={diagnostic} />
                </Elements>
            </div>
        </div>
    );
};

export default DiagnosicPay;
