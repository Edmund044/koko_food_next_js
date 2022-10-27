import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid'
import AdminNavigation from '../components/navigations/admin-navigation'
import axios from 'axios';
import { useState, useEffect } from 'react';
const drawerWidth = 240;

const columns = [
    {
      field: 'invoice_number',
      headerName: 'Invoice Number',
      width: 250,
      editable: true,
    },
    {
      field: 'served_plates',
      headerName: 'Served Plates',
      width: 250,
      editable: true,
    },
    {
      field: 'amount_in_ksh',
      headerName: 'Amount in KSH',
      width: 250,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Is Payed?',
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

const Invoices = () => {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    axios(
      {
        url:"http://127.0.0.1:5000/retrieve-invoices",
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        timeout: 10000
      }
    ).then((results) => {
      setTableData(results.data.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])
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
       <AdminNavigation/>
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
        rows={tableData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      </Box>
    </Box>
    </div>  );
}
 
export default Invoices;