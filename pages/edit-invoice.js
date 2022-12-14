import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
const editInvoice = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
        return (
          <Grid container component="main" sx={{ height: '100vh' }}>
           
          <CssBaseline />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Typography
                   component="h1" 
                   variant="h5"
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
              Edit Invoice
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Invoice Number"
                  name="invoice_number"
                  autoFocus
                  variant="standard"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ReceiptIcon />
                    </InputAdornment>
                                  )
                             }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="status"
                  label="Status"
                  type="text"
                  id="status"
                  variant="standard"
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
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
                  Edit
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
              backgroundImage: 'url(/static/images/status.png)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#00E1FD',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        );
}
 
export default editInvoice;