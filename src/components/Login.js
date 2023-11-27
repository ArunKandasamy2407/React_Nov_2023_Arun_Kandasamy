import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Login = () => {
  const [defpassword, setDefpassword] = useState('');
  const [userid, setUserid] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      if (users) {
        const user = users.find((user) => user.name === userid);

        if (user) {
          if (user.password === defpassword) {
            alert("success full");
            navigate("/")
          } else {
            setErrorMessage('Invalid password');
          }
        } else {
          setErrorMessage('User does not exist');
        }
      } else {
        setErrorMessage('Error fetching user data');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Error during login');
    }
    console.log("hi");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5"><h3>Login</h3></Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
            onChange={(e) => setUserid(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setDefpassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
