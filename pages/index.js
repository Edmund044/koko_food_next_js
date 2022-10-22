import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router'
var axios = require("axios")
const IndexRegister = () => {
    const router = useRouter()
    return (<div>
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
                    <Grid container component="main" sx={{ height: '100vh' }}>
       
       <CssBaseline />
       <Grid item xs={12} sm={8} md={5} component={Paper}  style={{ display: 'flex', alignItems: 'center'}} elevation={6} square>
        <Typography
           variant="h2"
           fontSize= "2.4rem"
           fontWeight="fontWeightBold"
           style={{ width: '70%',
                    marginLeft: '15%',
                    color: '#000000'
               }}
        >
        Avoid the hustle of manually getting meal tickets.
         Join <span   style={{ 
                    color: '#FEC72B'
               }}>
         KOKO FOOD
         </span> programme now.
         <Button
               onClick={() => {
                 router.push('/user-sign-in');
                  }}
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
               JOIN NOW
             </Button>
        </Typography>
         
       </Grid>
       <Grid
         item
         xs={false}
         sm={4}
         md={7}
         sx={{
           backgroundImage: 'url(/static/images/home_page_image.png)',
           backgroundRepeat: 'no-repeat',
           backgroundColor: '#ffffff',
           backgroundSize: 'contain',
           backgroundPosition: 'center',
         }}
       />
     </Grid>
    </div>
      
     
    );
}

export default IndexRegister;