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
const UserSignLogin = () => {
    const router = useRouter()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios(
          {
            url:"http://127.0.0.1:5000/employee-login",
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
            router.push('/scan-to-eat')
          })
          .catch((err) => {
            console.log(err)
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
        </Box>
      </Container>
    </div>);
}
 
export default UserSignLogin;