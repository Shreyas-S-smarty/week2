import React, { useState } from 'react';
import { signup } from '../api';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert('Signup successful!');
      window.location.href = '/login';
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            fullWidth
          />
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
            Signup
          </Button>
        </Box>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account? <a href="/login">Login</a>
      </Typography>
    </Container>
  );
};

export default Signup;
