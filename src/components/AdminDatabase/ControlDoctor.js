import React from 'react';
import { TableCell, tableCellClasses, TableRow } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#F2F2F2",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const ControlDoctor = ({doctor}) => {
    console.log(doctor)
  
    return (
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
        {doctor._id}
              </StyledTableCell>
              <StyledTableCell align="right">{doctor.name}</StyledTableCell>
              <StyledTableCell align="right">{doctor.email}</StyledTableCell>
              <StyledTableCell align="right"> {doctor.specialist}</StyledTableCell>
              <StyledTableCell align="right"><button className="btn btn-warning">Edit</button></StyledTableCell>
              <StyledTableCell align="right">
            <button className='btn-doctor-pay'>Delete</button>
             
              </StyledTableCell>
      </StyledTableRow>
    
    );
};

export default ControlDoctor;