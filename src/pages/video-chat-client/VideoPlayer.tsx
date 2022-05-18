import React, { useContext } from "react";
import { SocketContext } from "../../contexts/Context";
import useFirebase from "../../firebase/useFirebase/useFirebase";
import './style/index.css';

const VideoPlayer = () => {
    const {  callAccepted, myVideo, userVideo, callEnded, stream, call } =
        useContext(SocketContext);
        const {user}=useFirebase();
    console.log(userVideo, myVideo);
    // console.log(call)
    return (
        <div className="d-flex justify-content-between mt-5">
            {stream && (
                <div>
                    <div>
                        <h1 className="text-center mb-3">{user?.displayName}</h1>
                        <video
                            playsInline
                            muted
                            ref={myVideo}
                            autoPlay
                            style={{ width: "500px" }}
                        />
                    </div>
                </div>
            )}
            {callAccepted && !callEnded && (
                <div>
                    <div>
                        <h1>{call.name || "Name"}</h1>
                        <video
                            playsInline
                            ref={userVideo}
                            autoPlay
                            
                            style={{ width: "500px" }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
