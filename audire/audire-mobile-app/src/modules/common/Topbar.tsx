import {
  Avatar,
  AvatarFallbackText,
  Box,
  Icon,
  Image,
} from '@gluestack-ui/themed';
import { Menu } from 'lucide-react-native';
import { Asset } from 'expo-asset';

const Topbar = () => {
  const image = Asset.fromURI('/assets/audire.png').uri;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
      }}
    >
      <Icon as={Menu} size="xl" sx={{ marginRight: 66 }} />

      <Box>
        <Image
          size="xl"
          alt="Audire Logo"
          source={{
            uri: image,
          }}
        />
      </Box>

      <Avatar
        bgColor="$amber600"
        size="md"
        borderRadius="$full"
        sx={{ marginLeft: 66 }}
      >
        <AvatarFallbackText>Mohammed Sameer</AvatarFallbackText>
      </Avatar>
    </Box>
  );
};

export default Topbar;
