import React from 'react';
import { ContextProvider } from '../../contexts/Context';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import './style/index.css';
import Notifications from './Notifications';

const VideoChatRoute = () => {
  
    // const {  callAccepted, myVideo, userVideo, callEnded, stream, call } =
    // useContext(SocketContext);
    return (
        <ContextProvider>
        <div className='container'>
        <div className='diagnosis-header mt-0'>
        <h1 className="diagnosis-title" style={{marginTop:"150px"}}>
         Virtual Meet
        </h1>
        
        <hr />
      </div>
            <VideoPlayer />
           
             <Sidebar>
             <Notifications />
         </Sidebar>
            
           
        </div>
         </ContextProvider>
    );
};

export default VideoChatRoute;
