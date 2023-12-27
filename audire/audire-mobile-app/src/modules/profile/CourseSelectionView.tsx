import React, { useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';

import { useCourses } from '@learning-app/syllabus';
import { Animated } from 'react-native';
import CourseSelectionPlayIcon from '/assets/courseSelectionPlayIcon.svg';
import CommonGirl from '/assets/commonGirl.svg';

const CourseSelectionView = () => {
  const handleCardPress = (course: unknown) => {};
  const { data: { data: courses } = { data: [] } } = useCourses();
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
                    <CourseSelectionPlayIcon />
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
          <CommonGirl />
        </Animated.View>
      </Box>
    </Box>
  );
};

export default CourseSelectionView;
