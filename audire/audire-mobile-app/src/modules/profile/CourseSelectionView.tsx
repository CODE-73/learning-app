import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';
import { useCourses } from '@learning-app/syllabus';

const CourseSelectionView = () => {
  const handleCardPress = (course: unknown) => {
    // Handle card press logic here
    console.log(`Selected course: ${course}`);
  };
  const { data: { data: courses } = { data: [] } } = useCourses();

  return (
    <Box
      flex={1}
      bgColor="$white"
      w="$full"
      borderTopLeftRadius="$3xl"
      borderTopRightRadius="$3xl"
      elevation="$1.5"
      shadowColor="$black"
      shadowOpacity="$40"
      shadowRadius="$8"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
    >
      <Box flexDirection="column" alignItems="center" mt="$24">
        {courses.map((course) => (
          <Box
            key={course.id}
            maxWidth="$64"
            borderColor="$black"
            borderRadius="$lg"
            borderWidth="$1"
            my="$4"
            backgroundColor="$white"
            overflow="hidden"
            sx={{
              '@base': {
                mx: '$5',
              },
              _dark: {
                bg: '$backgroundDark900',
                borderColor: '$borderDark800',
              },
            }}
          >
            <Link href="/" asChild>
              <Box m="$4" w="$56" h="$12" alignItems="center">
                <TouchableOpacity onPress={() => handleCardPress(course.title)}>
                  <Text fontSize="$xl" fontWeight="bold">
                    {course.title}
                  </Text>
                </TouchableOpacity>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CourseSelectionView;
