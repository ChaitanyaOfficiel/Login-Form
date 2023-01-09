import React from 'react'
import message from '../assets/message.png'
import AppBar from '@mui/material/AppBar'
import  Toolbar  from '@mui/material/Toolbar'
import Typography  from '@mui/material/Typography'
function Header() {
  return (
    <AppBar position="static" sx={{background:'transparent', boxShadow: 'none'}}>
      <Toolbar variant="dense"  display="flex">
        <Typography variant="h6" color="inherit" component="div" flexGrow={1} sx={{color:'blue', fontSize:16}}>
          back to home
        </Typography>
        <img src={message} alt="" width="30" />
        <Typography variant="h6" component="div" sx={{color:'blue', fontSize:16}}>
            Need Help?
          </Typography>
          
      </Toolbar>
    </AppBar>
  )
}

export default Header