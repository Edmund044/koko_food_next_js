import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import WorkIcon from '@mui/icons-material/Work';
import axios from 'axios';
import { useState } from 'react';

const EditProfile = () => {
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
        url:"http://127.0.0.1:5000/update-employee",
        method: "PUT",
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        data:{
          employee_id:"2",
          email: data.get('email'),
          first_name: data.get('firstname'),
          last_name: data.get('lastname'),
          department: data.get('department'),
          employee_number: data.get('employee_number'),
          designation: data.get('designation')
        },
        timeout: 10000
      }
    )
      .then((results) => {
        // setinitiatives(results.data)
        console.log(results.data)
        setResponseMessage(`${results.data.message}, register another employee`)
        handleOpen()
      })
      .catch((err) => {
        console.log(err)
        setResponseMessage(`${err.response.data.message}`)
        handleOpen()
      })
  };
    return (
      <Grid container component="main" sx={{ height: '100vh' }}>
       
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
                alt="KOKO FOOD"
                src="/static/images/koko_logo.png"
                sx={{ width: 70, height: 70 }}
          />
          <Typography
               component="h1" 
               variant="h5"
               fontWeight="fontWeightBold"
               >
          Edit Profile
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="employee_number"
                label="Employee Number"
                name="employee_number"
                autoComplete="employee_number"
                autoFocus
                type="number"
                variant="standard"
                InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormatListNumberedIcon />
                  </InputAdornment>
                                )
                          }}
              />
            
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
             <TextField
                margin="normal"
                required
                fullWidth
                id="designation"
                label="Designation"
                name="designation"
                autoComplete="designation"
                autoFocus
                variant="standard"
                InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon />
                  </InputAdornment>
                                )
                          }}
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstname"
              label="First Name"
              type="text"
              id="firstname"
              variant="standard"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
                              )
                         }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Last Name"
              type="text"
              id="lastname"
              variant="standard"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
                              )
                         }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="department"
              label="Department"
              type="text"
              id="department"
              variant="standard"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ApartmentIcon />
                </InputAdornment>
                              )
                         }}
            />
            <br></br>
            <br></br>
             <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              style={{ mt: 5,
                    mb: 2 ,
                    borderRadius: 28, 
                    backgroundColor: '#00E1FD',
                    color: '#FFFFFF'
              }}
            >
              Edit Profile
            </Button>
            
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/static/images/register_side.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#00E1FD',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
    );
}

export default EditProfile;