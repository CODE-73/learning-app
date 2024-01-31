import { Box, Avatar, AvatarFallbackText, Text } from '@gluestack-ui/themed';
import { FC } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { Icon, ChevronRightIcon } from '@gluestack-ui/themed';
import NotificationIcon from '/assets/notificationIcon.svg';
import { useActiveUser } from '@learning-app/auth';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TopbarProps = {
  onToggleSidebar: () => void;
};

const Topbar: FC<TopbarProps> = ({ onToggleSidebar }) => {
  const {
    user: { optedCourse, firstName },
  } = useActiveUser();
  const { top } = useSafeAreaInsets();

  return (
    <Box
      w="$full"
      paddingHorizontal="$5"
      pt={top > 10 ? '$0' : undefined}
      pb="$3"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Pressable onPress={onToggleSidebar}>
          <Avatar
            bgColor="#D6A8D4"
            size="md"
            borderRadius="$full"
            position="relative"
          >
            <AvatarFallbackText fontWeight="bold" color="black">
              {firstName}
            </AvatarFallbackText>
          </Avatar>
        </Pressable>
        {optedCourse && (
          <Box
            bg="$primary500"
            pl={22}
            right={18}
            zIndex={-1}
            bgColor="#8D0C8A"
          >
            <TouchableOpacity onPress={() => router.push('/profile/course')}>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Text color="white" fontWeight="bold">
                  {optedCourse.title}
                </Text>
                <Icon
                  as={ChevronRightIcon}
                  m="$2"
                  w="$5"
                  h="$5"
                  color="white"
                />
              </Box>
            </TouchableOpacity>
          </Box>
        )}
      </Box>

      <TouchableOpacity onPress={() => router.push('/profile/notifications')}>
        <NotificationIcon />
      </TouchableOpacity>
    </Box>
  );
};

export default Topbar;
