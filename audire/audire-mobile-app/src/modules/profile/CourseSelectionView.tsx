import React, { useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box, Image } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import { useCourses } from '@learning-app/syllabus';
import { Animated } from 'react-native';

const CourseSelectionView = () => {
  const handleCardPress = (course: unknown) => {};
  const { data: { data: courses } = { data: [] } } = useCourses();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const PlayIcon = Asset.fromURI('/assets/courseSelectionPlayIcon.svg').uri;
  const commonGirl = Asset.fromURI('/assets/commonGirl.svg').uri;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Box flex={1} bgColor="$white" w="$full">
      <Box display="flex">
        <Text fontSize="$lg" color="black" fontWeight="$$light" ml="$5" pt="$8">
          Hey Jane!
        </Text>
        <Text fontSize="$2xl" color="black" fontWeight="bold" ml="$5" pt="$2">
          Let’s start learning!
        </Text>
      </Box>

      <Box mt="$16" px="$8">
        {courses.map((course) => (
          <Box
            key={course.id}
            borderColor="$black"
            borderRadius="$sm"
            my="$1"
            backgroundColor="$white"
            overflow="hidden"
            shadowColor="$black"
            shadowOffset={{ width: 1, height: 2 }}
            shadowOpacity={0.5}
            shadowRadius={5}
          >
            <Link href="/" asChild>
              <TouchableOpacity onPress={() => handleCardPress(course.title)}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  p="$7"
                >
                  <Box pl="$4" mt="$2">
                    <Text fontSize="$2xl" fontWeight="bold" color="black">
                      {course.title}
                    </Text>
                  </Box>
                  <Box pr="$4">
                    <Image
                      alt="loginBackroudImage"
                      size="xs"
                      source={{
                        uri: PlayIcon,
                      }}
                    />{' '}
                  </Box>
                </Box>
              </TouchableOpacity>
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        position="absolute"
        bottom="$0"
        left="$0"
        right="$0"
        zIndex={-1}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image
            alt="loginBackroudImage"
            size="2xl"
            source={{
              uri: commonGirl,
            }}
          />
        </Animated.View>
      </Box>
    </Box>
  );
};

export default CourseSelectionView;
