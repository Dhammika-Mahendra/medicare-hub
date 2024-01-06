import { AppBar, Box, Button, Container, Paper, Stack, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Admintable from './Admintable';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


export default function Admin() {

  return (
    <div style={{backgroundColor:'#f8fafb',height:'100%'}}>
        <Paper square sx={{position:'fixed',width:'100%',top:'0',zIndex:'10'}} >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color='black'>
            MedicareHub
          </Typography>
          <AccountCircleIcon fontSize='large'></AccountCircleIcon>
        </Toolbar>
        </Paper>
            <Stack position='fixed' spacing={2} sx={{width:'200px',height:'100%',pt:'30px',pl:'20px',pr:'30px',top:'60px'}}>
            <Button variant='outlined' sx={{justifyContent: "flex-start"}}>Staff</Button>
            <Button variant='text'sx={{justifyContent: "flex-start"}}>Patients</Button>
            <Button variant='text'sx={{justifyContent: "flex-start"}}>Analytics</Button>
            </Stack>
            <Box sx={{paddingLeft:'220px',paddingTop:'80px',height:'1000px',width:'100%',marginTop:'10px'}}>
         <Admintable></Admintable>
            </Box>

    </div>
  )
}
