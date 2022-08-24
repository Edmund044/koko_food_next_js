import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import VerifiedIcon from '@mui/icons-material/Verified';
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
const scanToEat = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Button 
        align="center"
        variant="contained"
        size="large"
        onClick={handleOpen}
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
    </Box>
    );
}
 
export default scanToEat;