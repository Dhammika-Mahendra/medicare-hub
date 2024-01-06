import * as React from 'react';
import {Typography, Button, Toolbar , Chip} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, sp, start , end) {
  return { id, name, sp, start, end};
}

const rows = [
  createData(1,'Amal Rathnayaka' ,'MBBS, MD, MRCP(UK)', '8.00pm','9.00pm'),
  createData(2,'Bimasara Herath' , 'MBBS, MD, MRCP(UK), PRCP-E','8.00pm','9.00pm'),
  createData(3,'Thushari Fernando' ,'MBBS, MD', '11.00am','4.00pm'),
  createData(4,'Infas Mohomad' , 'MBBS, FCGP(SL), MD-CH(UK), MBS-CH(UK), C.ht(USA)','10.00pm','12.00pm'),
  createData(5,'Yasith Karunathilaka' ,'MBBS, MD', '8.00pm','9.00pm')

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{marginLeft:'-20px'}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color='primary.main'>
            Doctors
          </Typography>
        <Button variant="contained" size="small">Add</Button>
        </Toolbar>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontWeight:'bold'}}>Id</TableCell>
            <TableCell sx={{fontWeight:'bold'}}>Name</TableCell>
            <TableCell align='center' sx={{fontWeight:'bold'}}>Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.id}
              </TableCell>
              <TableCell align="left"><Typography variant='h6'>{row.name}</Typography>{row.sp}</TableCell>
              <TableCell align="center"><Chip label={row.start} />:<Chip label={row.end} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}