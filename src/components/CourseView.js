import React, { useEffect, useState } from 'react'
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const CourseView = () => {

    var [course,setcourse] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response);
        setcourse(course = response.data)
        })
    }, []);


    return (
        <div>
           <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SCOPE</StyledTableCell>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">TITLE</StyledTableCell>
                <StyledTableCell align="right">BODY</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>  
              {course.map((value,index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">{value.userId}</StyledTableCell>
                  <StyledTableCell align="right">{value.id}</StyledTableCell>
                  <StyledTableCell align="right">{value.title}</StyledTableCell>
                  <StyledTableCell align="right">{value.body}</StyledTableCell>
                </StyledTableRow>
              ))}
              </TableBody>
          </Table>
        </TableContainer>
        </div>
      )
    }
    
    export default CourseView
    