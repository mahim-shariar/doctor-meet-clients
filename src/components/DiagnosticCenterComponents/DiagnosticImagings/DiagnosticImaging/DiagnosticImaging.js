import React from 'react';
import './DiagnosticImaging.css';
const DiagnosticImaging = ({imaging}) => {
    console.log(imaging)
    return (
        <div className='d-flex align-items-center imaging-info-container'>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="" style={{width:"30px",height:"30px"}} />
            <h5 className='ms-5'>{imaging.title}</h5>

        
        </div>
    );
};

export default DiagnosticImaging;