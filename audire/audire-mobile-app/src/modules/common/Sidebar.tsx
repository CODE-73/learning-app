import { Box, Text, Avatar, AvatarFallbackText } from '@gluestack-ui/themed';
import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

type Option = {
  name: string;
  link: string;
};

type SidebarProps = {
  isShown: boolean;
  onToggleSidebar: () => void;
};

const options: Option[] = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Contact Us', link: '/profile/contact-us' },
  { name: 'Download', link: '/profile/downloads' },
  { name: 'Terms And Conditions', link: '' },
  { name: 'Log Out', link: '' },
];
const Sidebar: FC<SidebarProps> = ({ isShown, onToggleSidebar }) => {
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
      bgColor="white"
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
          <Box display="flex" alignItems="center" mt="$2.5" mb="$2.5">
            <Box mt="$16" mb="$2.5">
              <Avatar bgColor="#B051AE" size="md" borderRadius="$full">
                <AvatarFallbackText fontWeight="bold" color="black">
                  Mohammed Sameer
                </AvatarFallbackText>
              </Avatar>
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="$xs" color="black">
                Profile
              </Text>
              <Text fontWeight="bold" color="black">
                Mohammed sameer
              </Text>
            </Box>
          </Box>
          <Box mt="$10" pl="$5">
            {options.map((option) => (
              <Link key={option.name} href={option.link} asChild>
                <TouchableOpacity>
                  <Text fontSize="$lg" color="black" mb="$10">
                    {option.name}
                  </Text>
                </TouchableOpacity>
              </Link>
            ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt="$2.5">
          <Text fontSize="$sm" color="black">
            Audire v1.0.0{' '}
          </Text>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default Sidebar;
