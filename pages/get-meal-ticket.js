import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import VerifiedIcon from '@mui/icons-material/Verified';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Grid from '@mui/material/Grid';
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
            gutterBottom>
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
                  color: '#FFFFFF'
           } }
        >
            GET TICKET
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     
        <Box textAlign='center' sx={style}>
          <VerifiedIcon 
           style={ {
                  backgroundColor: '#00E1FD',
                  color: '#FFFFFF'
           } }/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Operation successful
          </Typography>
          <Button 
            align="center"
            variant="contained"
            size="large"
            onClick={handleClose}
            style={ { borderRadius: 28, 
                    backgroundColor: '#00E1FD',
                    color: '#FFFFFF'
           } }
        >
            Continue
        </Button>
        </Box>
      </Modal>
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