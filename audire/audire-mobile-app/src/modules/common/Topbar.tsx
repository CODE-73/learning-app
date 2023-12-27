import {
  Box,
  Image,
  Avatar,
  AvatarFallbackText,
  Text,
} from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

import { FC } from 'react';
import { Pressable } from 'react-native';
import { Icon, ChevronRightIcon } from '@gluestack-ui/themed';
// import { useCourse } from '../../../../../libs/syllabus/src/swr';

type TopbarProps = {
  onToggleSidebar: () => void;
  Course: string;
};

const Topbar: FC<TopbarProps> = ({ onToggleSidebar }) => {
  // const { data: Course } = useCourse({ CourseId: string });
  const image = Asset.fromURI('/assets/notificationIcon.svg').uri;

  return (
    <Box
      w="$full"
      p="$6"
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
              Mohammed Sameer
            </AvatarFallbackText>
          </Avatar>
        </Pressable>
        <Box
          bg="$primary500"
          pl={22}
          right={18}
          zIndex={-1}
          bgColor="#8D0C8A"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Text color="white" fontWeight="bold">
            CA
          </Text>
          <Icon as={ChevronRightIcon} m="$2" w="$5" h="$5" color="white" />
        </Box>
      </Box>

      <Box>
        <Image
          size="xs"
          alt="notificationIcon"
          source={{
            uri: image,
          }}
        />
      </Box>
    </Box>
  );
};

export default Topbar;
