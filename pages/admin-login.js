import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import axios from 'axios';

const AdminLogin = () => {
  const router = useRouter()
  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      axios(
        {
          url:"http://127.0.0.1:5000/admin-login",
          method: "POST",
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
          data:{
            email: data.get('email'),
            password: data.get('password')
          },
          timeout: 10000
        }
      )
        .then((results) => {
          // setinitiatives(results.data)
          console.log(results.data.employee_id)
          if (typeof window !== "undefined") {

            // localStorage.setItem("admin_id", results.data.employee_id)
            
            }
          router.push('/invoices')
        })
        .catch((err) => {
          console.log(err)
        })
    };
    return ( <div>
          <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
          <Typography component="h1" variant="h5">
          Log In to KOKO FOOD DASHBOARD
          </Typography>
          <Box component="form" onSubmit={handleSubmit}   noValidate sx={{ mt: 1 }}>
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ mt: 3,
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
 
export default AdminLogin;