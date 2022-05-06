import React from 'react';
import './PremiumMembershipBanner.css';
const PremiumMembershipBanner = () => {
    return (
        <div className='d-flex align-items-center'>
            <div className="black-banner-bg d-flex flex-column justify-content-center">
                <div className="ms-5">
                <h1>We Provide Special Features For <br /> Our Premium Clients</h1>
                <div className="mt-4 ms-4">
                <li> Get Appointment Within an Hour</li>
                <li> 24X7 Services</li>
                <li> Discount on Pharmacy</li>
                <li> Discount on Appointments</li>
                <li> Discount On Lab Test</li>
                </div>
                
                </div>

            </div>
            <img src="https://media.istockphoto.com/photos/brain-activity-picture-id497487570?b=1&k=20&m=497487570&s=612x612&w=0&h=xeZb30W5Gm2qwbl54_EDZbZkTrWmKWrBH-zDYce1Szg=" alt="premium-banner" className='premium-banner-image' />
        </div>
    );
};

export default PremiumMembershipBanner;