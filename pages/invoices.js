import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DataGrid } from '@mui/x-data-grid'

const drawerWidth = 240;

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'invoiceDescription',
      headerName: 'Invoice Description',
      width: 250,
      editable: true,
    },
    {
      field: 'servedPlates',
      headerName: 'Served Plates',
      width: 250,
      editable: true,
    },
    {
      field: 'amountInKsh',
      headerName: 'Amount in KSH',
      width: 250,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 250,
      editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 250,
        editable: true,
      }
  ];
  
  const rows = [
    { id: 1, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 2, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 3, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 4, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13'  },
    { id: 5, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 6, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 7, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 8, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 9, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
    { id: 10, invoiceDescription: 'Beef/rice/Ugali', servedPlates: '1,000 plates', amountInKsh: 'KSH 300,000', status: 'Paid', date: 'July 22, 2018 07:22:13' },
  ];

const invoices = () => {
    return (<div>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,  backgroundColor: '#00E1FD'}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            KOKO FOOD DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          backgroundColor: '#00E1FD'
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Overview', 'Served Plates', 'Invoices', 'Register', 'Edit Invoices', 'Employees'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ height: 650, width: '100%' }}
      >
        <Toolbar />
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      </Box>
    </Box>
    </div>  );
}
 
export default invoices;