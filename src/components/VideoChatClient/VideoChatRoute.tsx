import React from 'react';
import { ContextProvider } from '../../context/Context';
import Notifications from './Notifications';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';

const VideoChatRoute = () => {
  

    return (
        <ContextProvider>
        <div className='container'>
        <div className='diagnosis-header mt-0'>
        <h1 className="diagnosis-title mt-0">
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
