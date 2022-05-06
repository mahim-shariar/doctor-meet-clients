import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import PremiumMembership from './PremiumMembership';
import PremiumMembershipBanner from './PremiumMembershipBanner/PremiumMembershipBanner';


const PremiumMemberships = () => {
    const [premiumMemberships,setPremiumMemberships]=useState([]);
    useEffect(()=>{
        fetch('./premiumMembership.json')
        .then(res=>res.json())
        .then(data=>setPremiumMemberships(data))
    },[])
    return (
        <div className='premium-membership-container'>
            <PremiumMembershipBanner></PremiumMembershipBanner>
            
            <div className='diagnosis-header'>
        <h1 className="diagnosis-title">
          Get Premium Membership Now
        </h1>
       
        <hr />
      </div>
      <div style={{backgroundColor:"#F2F2F2",padding:"100px 0px"}}>
      <Container>
      <CardGroup>
            {
                premiumMemberships.map((premiumMembership:any,id)=>(
                    <PremiumMembership
                    key={id} premiumMembership={premiumMembership}
                    ></PremiumMembership>
                ))
            }
            </CardGroup>
            </Container>
      </div>
            
      
        </div>
        
    );
};

export default PremiumMemberships;