import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Routes, Route, Link } from "react-router-dom";
import {auth} from "./firebase-config";
import { onAuthStateChanged, signOut } from 'firebase/auth';


const pages = ['Journal', 'Blog'];
const settings = ['Profile', 'Logout'];

const linkStyle = {
  margin: "1.5rem",
  textDecoration: "none",
  color: 'pink'
};


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
})

const logout = async () => {
  await signOut(auth);
}

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{
      backgroundColor: '#322d6d',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
                    <Link to="/" style={linkStyle}>Logo</Link>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={(event)=> console.log(event)}>
                  <Typography textAlign="center">
                  <Link to={`/${page}`}  style={linkStyle}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
                    <Link to="/" style={linkStyle}>Logo</Link>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e)=>console.log(page)}
                sx={{ my: 2, color: 'white', display: 'block', backgroundColor: '' }}
              >
            <Link  to={`/${page}`}  style={linkStyle}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              user ? (
                <>
<Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                setting=="Logout" ?<>
                <MenuItem key={setting} onClick={logout}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                </>:
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link to={`/${setting}`}>{setting}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
            </>
              ) : <Typography><Link to="/login" style={linkStyle}>Login/Register</Link></Typography>
            }
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
