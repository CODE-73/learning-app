import { Box } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import {
  Icon,
  ClockIcon,
  GripVerticalIcon,
  SettingsIcon,
} from '@gluestack-ui/themed';
import { TouchableOpacity, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';

type Option = {
  name: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
};

const footer = [
  { name: 'Exams', link: '/exams', icon: ClockIcon },
  {
    name: 'Home',
    link: '/',
    icon: GripVerticalIcon,
  },
  { name: 'Settings', link: '/profile/profile', icon: SettingsIcon },
] as Option[];

const FooterView = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  if (keyboardShown) {
    return null;
  }

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

export default FooterView;
