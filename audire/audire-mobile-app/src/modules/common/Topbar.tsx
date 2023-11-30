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
      w="$full"
      px="$10"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        size="md"
        pl="$2.5"
        bgColor="rgba(0, 0, 0, 0)"
        onPress={onToggleSidebar}
      >
        <ButtonIcon color="black" as={Menu} size="xl" zIndex={1} />
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

      <Box>
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
            bgColor="rgba(0, 0, 0, 0)"
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
