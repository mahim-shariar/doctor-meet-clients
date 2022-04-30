import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../../firebase/useFirebase/useFirebase';
import MyDiagnosis from '../MyDiagnoisis/MyDiagnosis';

const MyDiagnosises = () => {
    const [myDiagnosis,setMyDiagnosis]=useState([]);
    const {user}=useFirebase();
    useEffect(()=>{
        fetch(`http://localhost:5000/bookedDiagnosis/single?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyDiagnosis(data))
    },[user])
    useEffect(()=>{
        
    },[])
    return (
        <div className="mt-5 ms-5">
        <Table>
        <thead>
<tr>
  <th>Name</th>
  <th>Selected Diagnosis</th>
  <th>Payment Status</th>
  <th>Payment Fee</th>
  <th>Date</th>
  <th></th>
</tr>
</thead>
<tbody>
  {
      myDiagnosis.map(diagnosis=><MyDiagnosis diagnosis={diagnosis}></MyDiagnosis>)
  }
</tbody>
        </Table>
    </div>
    );
};

export default MyDiagnosises;