import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedIcon from '@mui/icons-material/Verified';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { useState } from 'react';

const MealOfTheDay = () => {
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
        url:"http://127.0.0.1:5000//create-meal",
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        data:{
          meal_name: data.get('meal_name'),
          meal_description: data.get('meal_description')
        },
        timeout: 10000
      }
    )
      .then((results) => {
        // setinitiatives(results.data)
        console.log(results.data)
        setResponseMessage(results.data.message)
        handleOpen()
      })
      .catch((err) => {
        console.log(err)
        setResponseMessage(err.response.data.message)
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
          Create Meal Of The Day
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="meal_name"
                label="Meal Name"
                name="meal_name"
                autoComplete="meal_name"
                autoFocus
                type="text"
                variant="standard"
                InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalDiningIcon />
                  </InputAdornment>
                                )
                          }}
              />
             <TextField
                margin="normal"
                required
                fullWidth
                id="meal_description"
                label="Meal Description"
                name="meal_description"
                autoComplete="Meal Description"
                autoFocus
                variant="filled"
                multiline
                rows={4}
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
              Create Meal
            </Button>
            
          </Box>
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
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/static/images/meal_of_the_day.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#00E1FD',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
    
    );
}

export default MealOfTheDay;