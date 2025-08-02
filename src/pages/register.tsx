import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router';

export default function Register() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
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
          Create Account
        </Button>
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Already have an account? <Link to="/auth/login">Login</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
