import React, { useEffect, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./Api";
import JoinScreen from "./JoinScreen";
import Container from "./Container";




// function VideoComponent(props) {
//   return null;
// }

// function Controls(props) {
//   return null;
// }


function VideoSDKApp() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };
console.log(meetingId);
  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: false,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => <Container meetingId={meetingId} />}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default VideoSDKApp;