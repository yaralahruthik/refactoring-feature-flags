import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
              My Dummy App
            </Link>
          </Typography>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/register" color="inherit">
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
