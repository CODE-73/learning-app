import {
  Avatar,
  AvatarFallbackText,
  Box,
  Icon,
  Image,
  Button,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import { Menu } from 'lucide-react-native';
import { FC } from 'react';

type TopbarProps = {
  onToggleSidebar: () => void;
};

const Topbar: FC<TopbarProps> = ({ onToggleSidebar }) => {
  const image = Asset.fromURI('/assets/audire.png').uri;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
      }}
    >
      {/* <Icon
        as={Menu}
        onClick={onToggleSidebar}
        size="xl"
        sx={{ marginRight: 66 }}
      /> */}
      <Button
        size="md"
        paddingLeft="10px"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      >
        <ButtonIcon
          color="black"
          as={Menu}
          onClick={onToggleSidebar}
          //TODO: Fahim Please check
          size="xl"
          sx={{ marginRight: 66, zIndex: 1 }}
        />
      </Button>

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
