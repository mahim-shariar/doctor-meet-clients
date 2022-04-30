import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Paper, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import useFirebase from '../../../firebase/useFirebase/useFirebase';
import MyDiagnosis from '../MyDiagnoisis/MyDiagnosis';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));
const MyDiagnosises = () => {
    const [myDiagnosis,setMyDiagnosis]=useState([]);
    const {user}=useFirebase();
    useEffect(()=>{
        fetch(`http://localhost:5000/bookedDiagnosis/single?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyDiagnosis(data))
    },[user])
    useEffect(()=>{
        
    },[user])
    return (
      <TableContainer component={Paper} className="mt-5 ms-5">
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
         <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Diagnosis Code</StyledTableCell>
            <StyledTableCell align="right">Diagnosis Date</StyledTableCell>
            <StyledTableCell align="right">Total Cost</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {
            myDiagnosis.map(diagnosis=><MyDiagnosis diagnosis={diagnosis}></MyDiagnosis>)
          }
       
        </TableBody>
         </Table>
      </TableContainer>
//         <div className="mt-5 ms-5">
//         <Table>
//         <thead>
// <tr>
//   <th>Name</th>
//   <th>Selected Diagnosis</th>
//   <th>Payment Status</th>
//   <th>Payment Fee</th>
//   <th>Date</th>
//   <th></th>
// </tr>
// </thead>
// <tbody>
//   {
//       myDiagnosis.map(diagnosis=><MyDiagnosis diagnosis={diagnosis}></MyDiagnosis>)
//   }
// </tbody>
//         </Table>
//     </div>
    );
};

export default MyDiagnosises;