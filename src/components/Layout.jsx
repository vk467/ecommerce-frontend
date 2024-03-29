import { Outlet, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Avatar, Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { CartCount } from "./context/CartContext";
import MouseOverPopover from "./utils/MouseOverPopover";
import Footer from "./Footer";

const pages = ['Home', 'Products'];
const routes = ['/', '/products'];
const settings = ['Account', 'Logout'];
const AppName = "V2 Commerce";

const Layout = () => {
    
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

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

  const handlePageRoutes = (event) => {
     let id = event.target.id;
     let idx = pages.indexOf(id);
     navigate(routes[idx]);
  };

  const openCart = (event) => {
    navigate('/cart');
  };
  const [count, setCount] = useContext(CartCount);

  return (
    <>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {AppName}
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left',}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' },}}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handlePageRoutes}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {AppName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                id={page}
                onClick={handlePageRoutes}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <MouseOverPopover label="Categories" list={['leggings','tops']}/>
          </Box>

          <Box sx={{ mx: 2 }}>
            <Tooltip title="Cart">
              <Badge color="secondary" badgeContent={count} showZero>
                <IconButton onClick={openCart} sx={{ p: 0, color:"white"}}>
                    <ShoppingCartIcon />
                </IconButton>
              </Badge>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
              keepMounted
              transformOrigin={{vertical: 'top', horizontal: 'right',}}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet />
    <Footer />
    </>
  );
};

export default Layout;