import {
  Badge,
  BadgeText,
  Box,
  Button,
  ButtonIcon,
  Image,
  VStack,
} from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import { Menu, MessageSquare } from 'lucide-react-native';
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
        paddingLeft="$2.5"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        onPress={onToggleSidebar}
      >
        <ButtonIcon
          color="black"
          as={Menu}
          size="xl"
          sx={{ marginRight: 66, zIndex: 1 }}
        />
      </Button>

      <Box sx={{ marginRight: 20 }}>
        <Image
          size="xl"
          alt="Audire Logo"
          source={{
            uri: image,
          }}
        />
      </Box>

      <Box alignItems="center" sx={{ marginLeft: 66 }}>
        <VStack>
          <Badge
            h={22}
            w={22}
            bg="$red600"
            borderRadius="$full"
            mb={-14}
            mr={-14}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
          >
            <BadgeText color="$white">2</BadgeText>
          </Badge>

          <ButtonIcon
            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            color="black"
            as={MessageSquare}
            size="xl"
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Topbar;