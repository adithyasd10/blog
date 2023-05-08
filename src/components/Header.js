import React from 'react'
import { Box,AppBar,Toolbar,IconButton,Typography,Button, Link } from '@mui/material';
<link rel="stylesheet" href="/components/Style.css" />

const Header = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="success"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG
          </Typography>
           <Button color='inherit' class="btn1"  variant='contained'><Link to="/" >ABOUT</Link></Button> 
            <Button class="btn2" color="inherit" variant='contained'><Link to="/create"></Link>SUBSCRIBE</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
