import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/router'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState, useEffect } from 'react';
const UserSignLogin = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const handleOpen = (message) =>{
      responseMessage = message
      setOpen(true);
    } 
    const handleClose = () => setOpen(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios(
          {
            url:"https://0581-41-220-233-170.in.ngrok.io/employee-login",
            method: "POST",
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
            data:{
              email: data.get('email')
            },
            timeout: 10000
          }
        )
          .then((results) => {
            // setinitiatives(results.data)
            console.log(results.data.employee_id)
            if (typeof window !== "undefined") {

              localStorage.setItem("employee_id", results.data.employee_id)
              
              }
            router.push('/get-meal-ticket')
          })
          .catch((err) => {
            console.log(err)
            setResponseMessage(err.response.data.message)
            handleOpen()
          })
      };
    return ( <div>
    <Typography
               variant="h3"
               fontWeight="fontWeightBold"
               style={{ mt: 3,
                    mb: 2 ,
                    color: '#00E1FD'
              }}
               >
          <strong> KOKO FOOD</strong>
          </Typography>
          <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
         <Typography variant="h3"    sx={{ alignItems: 'center'}}>
          Sign In
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
          <b>If you don’t have an account register</b>
          </Typography>
          <Typography variant="subtitle1">
         <b>You can <span style={{ mt: 3,
                    mb: 2 ,
                    color: '#00E1FD'
              }}>Register at the reception</span></b> 
          </Typography>
          <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="standard"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
                              )
                         }}
            />
            <br></br>
            <br></br>
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ mt: 8,
                    mb: 2 ,
                    borderRadius: 28, 
                    backgroundColor: '#00E1FD',
                    color: '#FFFFFF'
              }}
            >
              Log In
            </Button>
          </Box>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
        <DialogTitle id="alert-dialog-title">
        
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <VerifiedIcon 
           style={ {
                  backgroundColor: '#00E1FD',
                  color: '#FFFFFF'
           } }/> {responseMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
        </Box>
      </Container>
    </div>);
}
 
export default UserSignLogin;