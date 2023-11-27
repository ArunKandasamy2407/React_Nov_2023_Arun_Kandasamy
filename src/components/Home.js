import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Typography,
  Button,
  Menu,
  MenuItem,
  InputBase,
  Box,
} from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import Login from './Login';
import SignUp from './Signup';
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import MenuIcon from '@mui/icons-material/Menu';
import healthImage from './images/health.jpg';
import babyCareImage from './images/babycare.jpg';
import supplementImage from './images/supplements.jpg';
import womenCareImage from './images/womencare.jpg';
import personalCareImage from './images/personalcare.jpg';
import protienImage from './images/proteinpowder.jpg';
import medicineImage from './images/medicine.jpg';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const categories = [
    'Baby Care',
    'Supplement',
    'Health Check Devices',
    'General',
    'Personal Care',
    'Women Care',
    'Protein Powder & Drinks',
  ];
  const categoryData = [
    { id: 1, name: 'Baby Care', image: babyCareImage },
    { id: 2, name: 'Supplement', image: supplementImage },
    { id: 3, name: 'Health Check Devices', image: healthImage },
    { id: 4, name: 'General', image: medicineImage },
    { id: 5, name: 'Personal Care', image: personalCareImage },
    { id: 6, name: 'Women Care', image: womenCareImage },
    { id: 7, name: 'Protein Powder & Drinks', image: protienImage },
  ]; 

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" style={{ backgroundColor: '#4CAF50', width: '100%' }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignContent="flex-start">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <Button padding="0" margin="0" color="inherit">
                  Menu
                </Button>
                <MenuIcon />
              </IconButton>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton edge="end" color="inherit">
                  <HomeIcon />
                  <Button color="inherit">Home</Button>
                </IconButton>
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <h2>Digital Pharma</h2>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="search"
                style={{ marginRight: '8px' }}
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                style={{ color: 'inherit' }}
              />
            </Box>
            <div>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="cart"
                  style={{ marginRight: '8px' }}
                >
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton edge="end" color="inherit">
                  <LoginIcon />
                  <Button color="inherit">Login</Button>
                </IconButton>
              </Link>
              <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Sign Up</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          
          {categoryData.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              style={{ textDecoration: 'none', margin: '10px' }}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src={category.image}
                  alt={category.name}
                  style={{ width: '250px', height: '300px', objectFit: 'cover', padding:'25px'}}
                />
                <p>{category.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', flexGrow: 1 }}>
          <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
            <List>
              {categories.map((category, index) => (
                <ListItem button key={index}>
                  <Link
                    to={`/category/${index+1}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <ListItemText primary={category} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>

          <Container style={{ flexGrow: 1, padding: '20px' }}>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/ProductPage" element={<ProductPage/>}/>
              {/* Add more routes as needed */}
            </Routes>
          </Container>
        </div>
              <ProductPage/>
        <AppBar position="static" color="primary" style={{ backgroundColor: '#4CAF50', width: '100%' }}>
          <Toolbar>
            <Container>
              <Typography variant="body1" color="white" sx={{ flexGrow: 1 }}>
                © 2023 Online Medical Shop. All rights reserved.
              </Typography>
              <Typography variant="body1" color="white">
                <a href='#'>Contact Us</a> | <a href='#'>Privacy Policy</a> |{' '}
                <a href='#'>Terms of Service</a>
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
    </Router>
  );
};

export default Home;
