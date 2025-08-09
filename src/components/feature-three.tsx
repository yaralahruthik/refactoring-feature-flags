import { Card, Text } from '@mantine/core';

export default function FeatureThree() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={500}>New Feature Three</Text>

      <Text size="sm" c="dimmed">
        This is the modern version of Feature Three with advanced tools and and
        layout. But this should be behind a feature flag.
      </Text>
    </Card>
  );
}
