import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h5" component="h1">
            My Dummy App Auth
          </Typography>
          <Button component={Link} to="/">
            Go to Home Page
          </Button>
        </Box>
        <Outlet />
      </Paper>
    </Container>
  );
}
