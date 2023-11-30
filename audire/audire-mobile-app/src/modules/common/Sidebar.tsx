import { Box, Text, Avatar, AvatarFallbackText } from '@gluestack-ui/themed';
import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

// import { Home, Mail, Book, LogOut } from 'react-lucide-icons'; // Import Lucide Icons

type Option = {
  name: string;
  link: string;
};

type SidebarProps = {
  isShown: boolean;
  onToggleSidebar: () => void;
};

const options: Option[] = [
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
      style={{
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: 'black',
        backgroundColor: 'rgba(253, 242, 248, 0.5)',
      }}
      width="100%"
      bg="#fdf2f8"
      mb={20}
    >
      <Box
        style={{
          left: 0,
          top: 0,
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          height: '100%',
          borderRightWidth: 1,
          borderRightColor: 'black',
        }}
        width="70%"
        bg="#fdf2f8"
        mb={20}
      >
        <Box
          style={{
            borderBottomRightRadius: 50,
            overflow: 'hidden',
            borderRightWidth: 2,
            borderRightColor: 'black',
          }}
          width="100%"
          bg="#fbcfe8"
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Box style={{ marginTop: 60, marginBottom: 10 }}>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <AvatarFallbackText>Mohammed Sameer</AvatarFallbackText>
              </Avatar>
            </Box>
            <Box
              style={{
                display: 'flex',

                alignItems: 'center',
              }}
            >
              <Text sx={{ fontSize: 14, color: 'black' }}>Profile </Text>
              <Text sx={{ fontWeight: 'bold', color: 'black' }}>
                Muhammed Rameez
              </Text>
            </Box>
          </Box>
          <Box mt={40} pl={20}>
            {options.map((option) => (
              <Link href={option.link}>
                <TouchableOpacity key={option.name}>
                  <Text sx={{ fontSize: 18, color: 'black' }} mb={40}>
                    {option.name}
                  </Text>
                </TouchableOpacity>
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 14, color: 'black' }}>Audire v1.0.0 </Text>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default Sidebar;
