import FeatureOne from '@/components/feature-one';
import FeatureTwo from '@/components/FeatureTwo';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router';

export default function Home() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple home page using Material UI v5 components.
      </Typography>

      <Box mt={2}>
        <FeatureOne />
      </Box>

      <Box mt={2}>
        <FeatureTwo />
      </Box>

      <Box mt={2}>
        <Button component={Link} to="/about">
          Go to About Page
        </Button>
      </Box>
    </Paper>
  );
}
