import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import DiagnosticPaymentForm from "../diagnostic-payment-form/DiagnosticPaymentForm";
import './DiagnosisPay.css';
import usePremiumMembershipStatus from "../../../hooks/usePremiumMembersipStatus";

const stripePromise = loadStripe(
    "pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt"
);

const DiagnosisPay = () => {
    const [diagnostic, setDiagnostic] = useState({});
    const params = useParams();
    const {premiumMemberDetails,premiumMembershipStatus}=usePremiumMembershipStatus();
    console.log(premiumMembershipStatus);
const [floatPrice,setFloatPrice]=useState(0);
const [membershipDiscountPrice,seteMembershipDiscountPrice]=useState(0);
const [lastPrice,setLastPrice]=useState(0);
  useEffect(()=>{
    const fetchData=async()=>{
      await fetch(`https://floating-basin-02241.herokuapp.com/bookedDiagnosis/${params.id}`)
      .then(res=>res.json())
      .then(data=>{
       
           setDiagnostic(data)
          const intPrice=data.selectedDiagnosis.price;
          const intDiscount=data.selectedDiagnosis.discount;
          
            const floatDiscount=parseFloat(intDiscount).toFixed(2);
            
            const dd=floatDiscount/100.00;
        setFloatPrice(intPrice-(intPrice*dd));
        if(premiumMembershipStatus){

          const membershipDiscountPercentage= premiumMemberDetails?.categoryDetails.labTestDiscount;
          setLastPrice((floatPrice-(floatPrice*parseFloat(membershipDiscountPercentage/100))).toFixed(2));
          seteMembershipDiscountPrice(((floatPrice*parseFloat(membershipDiscountPercentage/100))).toFixed(2));
        }
        
        
          
          
        
        
      })
    }
    fetchData().catch(console.error);
    
  },[params,premiumMemberDetails,premiumMembershipStatus,floatPrice])
  // const intPrice=diagnostic?.selectedDiagnosis?.price;
  //   const intDiscount=diagnostic?.selectedDiagnosis?.discount;
  //     const floatDiscount=parseFloat(intDiscount).toFixed(2);
      
  //     const dd=floatDiscount/100.00;
      // console.log(intPrice,dd);


    return (
    <div className="payment-box">
            <div className="container">
                
                
                {
                  premiumMembershipStatus?
                  <div>

                  <h3 className="text-left">Total : $ {floatPrice}</h3>
                     <h3 className="text-left my-3">Membership Discount : - $ {membershipDiscountPrice}</h3>
                     <hr />
                  <h3 className="text-left">Subtotal : $ {lastPrice}</h3>
                  </div>
                  :<h3 className="text-left">Subtotal : $ {floatPrice}</h3>
                 
                }
                <Elements stripe={stripePromise}>
                    <DiagnosticPaymentForm diagnostic={diagnostic} />
                </Elements>
            </div>
        </div>
    );
};

export default DiagnosisPay;
