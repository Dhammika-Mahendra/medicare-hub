import { Grid, Paper } from '@mui/material'
import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HospitalIcon from '@mui/icons-material/LocalHospital';


const Login=()=>{
    const paperStyle ={padding:20,height:"25vh",backgroundColor: 'rgb(222, 244, 242)'}

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
      };

    return(
        <Grid>
            
            <Paper elevation={0} style={paperStyle}>
            <Grid align='center' sx={{marginTop: '90px'}}>

            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          <HospitalIcon style={{color: 'red', marginRight: '8px' }} fontSize="large" />
          <span style={{ color: '#09D636', fontWeight: 'bold' }}>Medicare</span>
            <span style={{ color: '#AFDCB9', fontWeight: 'bold' }}>Hub</span>
          </Typography>

            </Grid>
            </Paper>
            
            <Container component="main" maxWidth="sm">
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 10,
              px: 4,
              py: 0,
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
           <Grid sx={{marginTop: '-20px',marginBottom:'0px'}}>
           <Typography component="h1" variant="h4">
              <h2 style={{fontWeight: 'bold',color:'#a6a4a4'}}>Please Login</h2>
            </Typography>
           </Grid>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5,mb:2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="UID"
                label="User Id"
                name="UID"
               
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                
              />
              
              <Button
                type="submit"
              
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor: 'rgb(121, 204, 190)', color: 'white'}}
                style={{position:'relative',left:'55vh'}}
              >
                Login
              </Button>
              
            </Box>
          </Box>
        </Container>
         
        </Grid>
    );
}
export default Login;