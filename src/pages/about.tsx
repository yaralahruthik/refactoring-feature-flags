import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router';

export default function About() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the About Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple about page using Material UI v5 components.
      </Typography>
      <Box mt={2}>
        <Button component={Link} to="/">
          Go to Home Page
        </Button>
      </Box>
    </Paper>
  );
}
