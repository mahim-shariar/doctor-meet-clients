import React, { useEffect, useMemo, useRef } from 'react';
import {useParticipant} from '@videosdk.live/react-sdk';
import ReactPlayer from "react-player";
function VideoComponent(props) {
    const micRef = useRef(null);
    const { webcamStream, micStream, webcamOn, micOn ,enableWebcam} = useParticipant(
      props.participantId
    );
    console.log(enableWebcam);

    const videoStream = useMemo(() => {
      
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        return mediaStream;
      }
    }, [webcamStream, webcamOn]);
    useEffect(() => {
      if (micRef.current) {
        if (micOn) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
  
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
   

    return (
      <div key={props.participantId}>
        {micOn && micRef && <audio ref={micRef} autoPlay />}
        {webcamOn && (
          <ReactPlayer
            //
            autoPlay={true}
            playsinline // very very imp prop
            pip={false}
            light={false}
            controls={true}
            muted={true}
            playing={true}
            //
            ref={videoStream}
            //
            height={"100px"}
            width={"100px"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        )}
      </div>
    );
  }

  export default VideoComponent;