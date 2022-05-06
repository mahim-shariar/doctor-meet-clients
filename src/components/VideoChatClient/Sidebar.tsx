import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../../context/Context";
import './Sidebar.css';
const Sidebar = ({ children }: any) => {
  const { me, callAccepted, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const callAUser = (e: any) => {
    e.preventDefault();
    callUser(idToCall);
  };
  console.log(me);
  return (
    <div className="video-chat-sidebar">
       <CopyToClipboard text={me}>
                <button className="btn-copy-id" onClick={(e)=>e.preventDefault()} title="Click to Copy">ID</button>
              </CopyToClipboard>
      <form noValidate autoComplete="off">
        <div>
          <div style={{ width: "600px" }}>
            <h1 className="sidebar-title text-center mb-5">Account Info</h1>
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                // className="form-control"
                className="sidebar-form"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
              
         
             
            </div>
          </div>
          <div>
           
            <div
              className="input-group input-group-sm mb-3"
              style={{ width: "600px" }}
            >
              <input
                type="text"
                className="sidebar-form"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setIdToCall(e.target.value)}
                placeholder="Enter ID to call"
                value={idToCall}
                
              />
              {callAccepted && !callEnded ? (
                <button className="btn btn-warning" onClick={leaveCall}>
                  Hang Up
                </button>
              ) : (
                
                  <img src="https://cdn-icons.flaticon.com/png/128/3059/premium/3059606.png?token=exp=1651840673~hmac=229c3147a5b14466a711b596bea30808" className="call-icon" alt="" onClick={callAUser} title="Call Now"/>
                
              )}
            </div>
          </div>
        </div>
      </form>
      {children}
    </div>
  );
};

export default Sidebar;
