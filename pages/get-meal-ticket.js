import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useState, useEffect } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import * as geolib from 'geolib';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const GetMealTicket = () => {
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isUserCoordinatesWithinRivaanCenterFoodStationCoordinates, setStateRivaanCondition] = useState(false);
  const [isUserCoordinatesWithinKokoplexC4SecondFloorFoodStation, setStateC4SecondFloorCondition] = useState(false);
  const [isUserCoordinatesWithinKokoplexC3SecondFloorFoodStation, setStateC3SecondFloorCondition] = useState(false);
  const [isUserCoordinatesWithinkokoplexC3FirstFloorFoodStation, setStateC3FirstFloorCondition] = useState(false);
  const [visibilityStatus, setVisibilityStatus] = useState("visible");

  const handleOpen = (message) =>{
    responseMessage = message
    setOpen(true);
  } 
  const handleClose = () => setOpen(false);
  const handleMealTicketing = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    axios(
      {
        url:"http://127.0.0.1:5000/create-transaction",
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        data:{
          employee_id: localStorage.getItem("employee_id")
        },
        timeout: 10000
      }
    )
      .then((results) => {
        // setinitiatives(results.data)
        console.log(results.data)
        checkDistanceFromCounter()
        setResponseMessage(results.data.message)
        handleOpen()
      })
      .catch((err) => {
        console.log(err)
        checkDistanceFromCounter()
        setResponseMessage(err.response.data.message)
        handleOpen()
      })
  };
  useEffect(() => {
    checkDistanceFromCounter()
  }, [])
  const checkDistanceFromCounter = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
    const rivaanCenterFoodStationCoordinates =  { latitude: 51.5175, longitude: 7.4678 }; 
    const kokoplexC4SecondFloorFoodStationCoordinates =  { latitude: 51.5175, longitude: 7.4678 };   
    const kokoplexC3SecondFloorFoodStationCoordinates =  { latitude: 51.5175, longitude: 7.4678 }; 
    const kokoplexC3FirstFloorFoodStationCoordinates =  { latitude: 51.5175, longitude: 7.4678 }; 

  setStateRivaanCondition( geolib.isPointWithinRadius(
      { latitude: position.coords.latitude, longitude: position.coords.longitude },
      rivaanCenterFoodStationCoordinates,
      7
  ));
  setStateC4SecondFloorCondition(
    geolib.isPointWithinRadius(
      { latitude: position.coords.latitude, longitude: position.coords.longitude },
      kokoplexC4SecondFloorFoodStationCoordinates,
      7
  )
  );
  setStateC3SecondFloorCondition(
  //   geolib.isPointWithinRadius(
  //     { latitude: position.coords.latitude, longitude: position.coords.longitude },
  //     kokoplexC3SecondFloorFoodStationCoordinates,
  //     7
  // )
  true
  );
  setStateC3FirstFloorCondition(
    geolib.isPointWithinRadius(
      { latitude: position.coords.latitude, longitude: position.coords.longitude },
      kokoplexC3FirstFloorFoodStationCoordinates,
      7
  )
  );
  setResponseMessage("Your are far away from the serving station!!")
    console.log(
      geolib.isPointWithinRadius(
        { latitude: position.coords.latitude, longitude: position.coords.longitude },
        kokoplexC3FirstFloorFoodStationCoordinates,
        7
    )

    );
      },
      () => {
          alert('Position could not be determined.');
      }
  );
  }
    return (
        <Box textAlign='center' sx={{ '& button': { m:2 } }}>
    <div>
        <Typography 
        align="center"
        variant="h4"
        fontWeight="fontWeightBold"
        gutterBottom>
            GET MEAL TICKET
        </Typography>
       
        <Box
            component="img"
            style={{
                width: 200,
                height: 200,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
                    }} 
            alt="The house from the offer."
            src="/static/images/Shawarma-pana.png"
         />
        <Typography 
            align="center"
            variant="h5"
            gutterBottom
            onClick={checkDistanceFromCounter}
            >
            Approach the serving counter and press the button below to get meal ticket.
        </Typography>
       
       
        <Button 
        align="center"
        variant="contained"
        size="large"
        onClick={handleMealTicketing}
        startIcon={<LocalDiningIcon />}
        style={ { borderRadius: 28, 
                  backgroundColor: '#00E1FD',
                  color: '#FFFFFF',
                  visibility: visibilityStatus
           } }
        >
            GET TICKET
        </Button>
  
    </div> 
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
    );
}
 
export default GetMealTicket;