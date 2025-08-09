import { fetchProfile, type ProfileType } from '@/api/profile';
import FeatureFlag from '@/components/feature-flag';
import FeatureOne from '@/components/feature-one';
import FeatureThree from '@/components/feature-three';
import FeatureTwo from '@/components/FeatureTwo';
import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';
export default function Home() {
  const [profile, setProfile] = React.useState<ProfileType | null>(null);

  React.useEffect(() => {
    fetchProfile().then((data) => {
      setProfile(data);
    });
  }, []);

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

      <FeatureFlag enableCondition={profile?.id === '12345'}>
        <Box mt={2}>
          <FeatureThree />
        </Box>
      </FeatureFlag>

      <Box mt={2}>
        <Button component={Link} to="/about">
          Go to About Page
        </Button>
      </Box>
    </Paper>
  );
}
