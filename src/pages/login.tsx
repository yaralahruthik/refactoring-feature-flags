import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router';

export default function Login() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
