import { Box } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import {
  Icon,
  ClockIcon,
  GripVerticalIcon,
  SettingsIcon,
} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

const HomeFooterView = () => {
  const footer = [
    { name: 'Exams', link: '#', icon: ClockIcon },
    {
      name: 'Home',
      link: '#',
      icon: GripVerticalIcon,
    },
    { name: 'Settings', link: '#', icon: SettingsIcon },
  ];
  return (
    <Box
      borderRadius="$2xl"
      position="absolute"
      w="$full"
      bottom="$0"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bg="#D6A8D4"
      px="$10"
      py="$5"
      alignItems="center"
    >
      {footer.map((footer) => (
        <Link key={footer.name} href={footer.link} asChild>
          <TouchableOpacity>
            {footer.icon && <Icon as={footer.icon} w="$6" h="$8" mx="$5" />}
          </TouchableOpacity>
        </Link>
      ))}
    </Box>
  );
};

export default HomeFooterView;
