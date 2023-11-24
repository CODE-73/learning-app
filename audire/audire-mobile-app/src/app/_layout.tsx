import { Slot } from 'expo-router';
import { GluestackUIProvider, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const RootLayout = () => (
  <GluestackUIProvider config={config}>
    <Box width="100%" justifyContent="center" alignItems="center">
      <Slot />
    </Box>
  </GluestackUIProvider>
);
export default RootLayout;
