import { Box, Text } from '@gluestack-ui/themed';
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useActiveUser, useUpdateProfile } from '@learning-app/auth';
import { useCourses } from '@learning-app/syllabus';
import { Animated } from 'react-native';
import CommonGirl from '/assets/commonGirl.svg';
import CourseSelectionPlayIcon from '/assets/courseSelectionPlayIcon.svg';
import { useRouter } from 'expo-router';

const CourseSelectionView = () => {
  const {
    data: { data: courses } = { data: [] },
    isLoading: isLoadingCourses,
  } = useCourses();
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { user } = useActiveUser();

  const { trigger, isMutating: isUpdatingSelectedCourse } = useUpdateProfile();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const updateOptedCourse = async (courseId: string) => {
    try {
      await trigger({
        profileId: user.id,
        data: {
          optedCourseId: courseId,
        },
      });
      // Router.replace is failing with DrawerLayout
      router.push('/');
      // router.replace('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box flex={1} bgColor="$white" w="$full">
      <Box display="flex">
        <Text fontSize="$lg" color="black" fontWeight="$light" ml="$5" pt="$8">
          Hey {user.firstName}!
        </Text>
        <Text fontSize="$2xl" color="black" fontWeight="$bold" ml="$5" pt="$2">
          Let’s start learning!
        </Text>
      </Box>
      <Box mt="$16" px="$8">
        {isLoadingCourses ? (
          <ActivityIndicator size="large" color="#D6A8D4" />
        ) : (
          courses.map((course) => (
            <Box
              key={course.id}
              borderColor="$black"
              borderRadius="$sm"
              my="$1.5"
              backgroundColor="$white"
              overflow="hidden"
              shadowColor="$black"
              shadowOffset={{ width: 1, height: 2 }}
              shadowOpacity={0.5}
              shadowRadius={5}
              bgColor="#e5e5e5"
            >
              <TouchableOpacity onPress={() => updateOptedCourse(course.id)}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  p="$7"
                >
                  <Box pl="$4" mt="$2">
                    <Text fontSize="$xl" fontWeight="$extrabold" color="black">
                      {course.title}
                    </Text>
                  </Box>
                  <Box pr="$4">
                    <CourseSelectionPlayIcon />
                  </Box>
                </Box>
              </TouchableOpacity>
            </Box>
          ))
        )}

        {isUpdatingSelectedCourse && (
          <Box
            bg="$white"
            opacity={0.5}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ActivityIndicator size="large" color="#D6A8D4" />
          </Box>
        )}
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
