import React, { useState } from 'react';
import { login } from '../api';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      alert('Login successful!');
      window.location.href = '/';
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            fullWidth
          />
          <Button type="submit" variant="contained" sx={{ bgcolor: '#1DB954' }}>
            Login
          </Button>
        </Box>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don’t have an account? <a href="/signup">Signup</a>
      </Typography>
    </Container>
  );
};

export default Login;
