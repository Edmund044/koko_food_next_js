import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios';
import AdminNavigation from '../components/navigations/admin-navigation';
import { useState, useEffect } from 'react';
const drawerWidth = 240;

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
      field: 'employee_number',
      headerName: 'Employee Number',
      width: 250,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'first_name',
      headerName: 'First Name',
      width: 250,
      editable: true,
    },{
      field: 'last_name',
      headerName: 'Last Name',
      width: 250,
      editable: true,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 250,
      editable: true,
    },
    {
      field: 'designation',
      headerName: 'Designation',
      width: 250,
      editable: true,
    },
    {
      field: 'time_created',
      headerName: 'Time Created',
      width: 250,
      editable: true,
    },
    {
      field: 'time_updated',
      headerName: 'Time Updated',
      width: 250,
      editable: true,
    }
  ];
  

const Employees = () => {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    axios(
      {
        url:"http://127.0.0.1:5000/retrieve-employees",
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        timeout: 10000
      }
    ).then((results) => {
      console.log(results.data.data)
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
        <AdminNavigation />
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
 
export default Employees;