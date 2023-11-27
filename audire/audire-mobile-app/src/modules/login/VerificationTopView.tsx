import VerificationView from './VerificationView';
import { Image, Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

const VerificationTopView = () => {
  const image = Asset.fromURI('/assets/audire.png').uri;
  return (
    <Box
      bg="#701a75"
      sx={{
        // Use flex to make the Box fill the entire screen
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // 100% of the viewport height
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally

        // Other styles if needed
        // '@sm': { m: '$1' },
        // '@lg': { m: '$1' },
      }}
    >
      <Image
        size="2xl"
        alt="Audire Logo"
        source={{
          uri: image,
        }}
      />
      <VerificationView />
    </Box>
  );
};

export default VerificationTopView;
