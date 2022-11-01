import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/router'
const AdminNavigation = () => {
    const router = useRouter()
    return (<div>
         <List>
          {[ 'Register Employees','Edit Employees','List Of Employees','Meal Of the day','Served Plates', 'Invoices', 'Edit Invoices'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => {
                let route = '';
                if (text == 'Served Plates'){
                  route = '/served-plates'
                }
                else if (text == 'Invoices'){
                  route = '/invoices'
                }
                else if (text == 'Meal Of the day'){
                  route = '/meal-of-the-day'
                }
                else if (text == 'Edit Employees'){
                  route = '/edit-profile'
                }
                else if (text == 'List Of Employees'){
                  route = '/employees'
                }
                else if (text == 'Register Employees'){
                  route = '/register'
                }
                else if(text == 'Edit Invoices'){
                  route = '/edit-invoice'
                }
                else{
                  route = '/admin-login'
                }
                 router.push(route);
                  }}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </div>  );
}
 
export default AdminNavigation;