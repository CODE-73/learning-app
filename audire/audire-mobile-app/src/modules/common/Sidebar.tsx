import { Box, Text, Avatar, AvatarFallbackText } from '@gluestack-ui/themed';
import { FC, ReactNode } from 'react';
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

type Option = {
  name: string;
  link: string;
  icon: ReactNode;
};

type SidebarProps = {
  isShown: boolean;
  onToggleSidebar: () => void;
};

const options: Option[] = [
  { name: 'Exams', link: '/', icon: ClockIcon },
  {
    name: 'Home',
    link: '#',
    icon: GripVerticalIcon,
  },
  { name: 'Notifications', link: '#', icon: BellIcon },
  { name: 'Payments', link: '#', icon: CheckCircleIcon },
  { name: 'Settings', link: '#', icon: SettingsIcon },
  { name: 'Logout', link: '#', icon: CircleIcon },
];
const Sidebar: FC<SidebarProps> = ({ isShown, onToggleSidebar }) => {
  const {
    user: { firstName },
  } = useActiveUser();

  return isShown ? (
    //transperent box
    <Box
      onTouchMove={onToggleSidebar}
      left="$0"
      top="$0"
      display="flex"
      flexDirection="column"
      position="absolute"
      height="$full"
      width="$full"
      mb="$5"
      bgColor="rgba(255, 255, 255, 0.5)"
    >
      <Box
        left="$0"
        top="$0"
        display="flex"
        flexDirection="column"
        position="absolute"
        h="$full"
        width="$3/4"
        bg="white"
        mb="$5"
      >
        <Box overflow="hidden" width="100%">
          <Box display="flex" flexDirection="row" p="$5">
            <Avatar bgColor="#D6A8D4" size="lg" borderRadius="$full">
              <AvatarFallbackText fontWeight="bold" color="black">
                {firstName}
              </AvatarFallbackText>
            </Avatar>

            <Box pl="$3">
              <Text fontSize="$sm" color="black" fontWeight="bold">
                Hello,
              </Text>
              <Text fontWeight="bold" color="black" fontSize="$2xl">
                {firstName}!
              </Text>
            </Box>
          </Box>
          <Box>
            <Box h={0.3} backgroundColor="black" m={17}></Box>
          </Box>
          <Box mt="$10" pl="$5">
            {options.map((option) => (
              <Link key={option.name} href={option.link} asChild>
                <TouchableOpacity>
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
                      />
                    )}
                    <Text fontSize="$lg" color="black" fontWeight="$bold">
                      {option.name}
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Link>
            ))}
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
    </Box>
  ) : null;
};

export default Sidebar;
