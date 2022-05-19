// import React,{useEffect,useState} from 'react';
// import { useParams } from 'react-router-dom';
// import SingleDoctorKey from './SingleDoctorKey';

// const SingleDoctor = () => {
//      const params = useParams();
//      const [doctor,setDoctor]=useState({});
//      const [leftValue,setLeftValue]=useState();
//      const [arrayOfKeys,setArrayOfKeys]=useState([]);
//      useEffect(()=>{
//          fetch("/doctors.json")
//          .then(res=>res.json())
//          .then(data=>{
             
//              for(const d of data){

//                  if(d.id===parseInt(params.id)){
//                      setDoctor(d);
                     
//                     setArrayOfKeys((Object.keys(d)))
//                  }
                 
//              }
//          })

//      },[params.id,arrayOfKeys])
     
//     return (
//         <div>
           

//         </div>
//     );
// };

// export default SingleDoctor;