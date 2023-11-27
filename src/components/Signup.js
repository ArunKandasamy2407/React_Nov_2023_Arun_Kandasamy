import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [userExistsError, setUserExistsError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (pass !== cpass) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(pass)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one digit, one lowercase, and one uppercase letter'
      );
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;

      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        setUserExistsError('User with this email already exists');
        return;
      }

      await axios.post("http://localhost:3001/users", { "name": name, "password": pass, "email": email });
      navigate("/");
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">Sign Up</Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            error={!!userExistsError}
            helperText={userExistsError}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            error={!!passwordError}
            helperText={passwordError}
            onChange={(e) => setPass(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setCpass(e.target.value)}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
