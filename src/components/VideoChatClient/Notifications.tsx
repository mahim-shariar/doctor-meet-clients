import React, { useContext } from 'react';
import { SocketContext } from '../../context/Context';
import './Notifications.css';
const Notifications = () => {
    const { answerCall, call, callAccepted,leaveCall} = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className='w-50 mx-auto mt-5'>
          <h1 className='text-center call-notification-title'> <span>{call.name}...</span></h1>
          <div className='d-flex justify-content-between mt-4'>
          <button className="btn-decline-call" onClick={leaveCall} title="Decline">
          <i className="fas fa-phone-slash"></i>
          </button>

          <button className="btn-accept-call" onClick={answerCall} title="Accept">
          <i className="fas fa-phone"></i>
          </button>
          
          </div>
          
        </div>
      )}
    </>
  );
};

export default Notifications;
