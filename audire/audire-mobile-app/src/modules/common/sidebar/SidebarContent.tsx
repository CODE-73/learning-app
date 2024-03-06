import { Box, Text, Avatar, AvatarFallbackText } from '@gluestack-ui/themed';
import { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import {
  Icon,
  ClockIcon,
  GripVerticalIcon,
  BellIcon,
  CheckCircleIcon,
  SettingsIcon,
  CircleIcon,
} from '@gluestack-ui/themed';
import { useActiveUser } from '@learning-app/auth';
import ConformLogoutDialogue from './ConfirmLogoutDialog';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Option = {
  name: string;
  link: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};
type SidebarContentProps = { onClose: () => void };

const options: Option[] = [
  {
    name: 'Home',
    link: '/',
    icon: GripVerticalIcon,
    disabled: false,
  },
  { name: 'Exams', link: '/exams', icon: ClockIcon, disabled: false },
  {
    name: 'Notifications',
    link: '/profile/notifications',
    icon: BellIcon,
    disabled: false,
  },

  {
    name: 'Settings',
    link: '/profile/profile',
    icon: SettingsIcon,
    disabled: false,
  },
];
const SidebarContent: FC<SidebarContentProps> = (props) => {
  const {
    user: { firstName },
  } = useActiveUser();

  const [showModal, setShowModal] = useState(false);
  const { top } = useSafeAreaInsets();

  return (
    <Box
      display="flex"
      flexDirection="column"
      bg="white"
      style={{ paddingTop: top, height: '100%' }}
    >
      <Box overflow="hidden" width="100%">
        <Box display="flex" flexDirection="row" p="$5">
          <Avatar bgColor="#D6A8D4" size="lg" borderRadius="$full">
            <AvatarFallbackText fontWeight="bold" color="black">
              {firstName}
            </AvatarFallbackText>
          </Avatar>

          <Box pl="$3">
            <Text fontSize="$sm" color="black" fontWeight="$light">
              Hello,
            </Text>
            <Text fontWeight="bold" color="black" fontSize="$2xl" py="$2">
              {firstName} !
            </Text>
          </Box>
        </Box>
        <Box>
          <Box h={0.3} backgroundColor="black" m={17}></Box>
        </Box>
        <Box mt="$10" pl="$5">
          {options.map((option) => (
            <Link
              key={option.name}
              href={option.link}
              disabled={options.disabled}
              asChild
            >
              <TouchableOpacity onPress={props.onClose}>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mb="$10"
                >
                  {option.icon && (
                    <Icon
                      as={option.icon}
                      w="$5"
                      h="$6"
                      mx="$5"
                      fontWeight="$bold"
                      color={option.disabled ? 'gray' : 'black'}
                    />
                  )}
                  <Text
                    fontSize="$lg"
                    color={option.disabled ? 'gray' : 'black'}
                    fontWeight="$bold"
                  >
                    {option.name}
                  </Text>
                </Box>
              </TouchableOpacity>
            </Link>
          ))}
          <Box h={0.3} backgroundColor="black" m={17}></Box>
          <TouchableOpacity
            onPress={() => {
              props.onClose();
              setShowModal(true);
            }}
          >
            <Box display="flex" flexDirection="row">
              <Icon
                as={CircleIcon}
                w="$5"
                h="$6"
                mx="$5"
                fontWeight="$bold"
                color="#B91C1C"
              ></Icon>
              <Text fontWeight="bold" color="#B91C1C">
                Logout
              </Text>
            </Box>
          </TouchableOpacity>
          {showModal && (
            <ConformLogoutDialogue
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="$2.5"
        backgroundColor="white"
        p="$2"
      >
        <Text fontSize="$sm" color="black">
          Audire v1.0.0
        </Text>
      </Box>
    </Box>
  );
};

export default SidebarContent;
