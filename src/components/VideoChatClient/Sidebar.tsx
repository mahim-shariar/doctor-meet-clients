import React, { useContext, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../../context/Context";
import useFirebase from "../../firebase/useFirebase/useFirebase";
import './Sidebar.css';
const Sidebar = ({ children }: any) => {
  const { me, callAccepted, setName, name,callEnded, leaveCall, callUser } =
    useContext(SocketContext);
    const {user}=useFirebase();
  const [idToCall, setIdToCall] = useState("");
  const [count,setCount]=useState(0);
  // console.log(me);
  useEffect(()=>{
    setName(user?.displayName)
    
  },[user,setName])

  const callAUser = (e: any) => {
    e.preventDefault();
    
    callUser(idToCall);
  };
  const copyId=(e:any)=>{
    e.preventDefault();
if(me){
  alert(`Id ${me} is copied succesfully`);
}
else{
  alert("OOPS ! Id is not copied. Try Again");
  setCount(count+1);
  if(count===1){
    setCount(0);
    window.location.reload();
  }
}

  }
  return (
    <div className="video-chat-sidebar">
       <CopyToClipboard text={me}>
                <button className="btn-copy-id" onClick={copyId} title="Click to Copy">ID</button>
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
                disabled
                value={name}
                
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
              {!callAccepted && 
                    <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" className="call-icon" alt="" onClick={callAUser} title="Call Now"/>
              }
            </div>
            {callAccepted && !callEnded && (
                <button className="btn-decline-call mx-auto mt-5" onClick={leaveCall} title="Decline">
                <i className="fas fa-phone-slash"></i>
                </button>
              )}
          </div>
        </div>
      </form>
      {children}
    </div>
  );
};

export default Sidebar;
