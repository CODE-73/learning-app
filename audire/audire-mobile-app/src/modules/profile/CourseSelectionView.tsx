import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';

const CourseSelectionView = () => {
  const handleCardPress = (course: unknown) => {
    // Handle card press logic here
    console.log(`Selected course: ${course}`);
  };

  return (
    <Box
      flex={1}
      bgColor="$white"
      w="$full"
      borderTopLeftRadius="$3xl"
      borderTopRightRadius="$3xl"
      //Android
      elevation="$1.5"
      // iOS
      shadowColor="$black"
      shadowOpacity="$40"
      shadowRadius="$8"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
    >
      <Box flexDirection="column" alignItems="center" mt="$24">
        <Box
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
            <Box
              m="$4"
              w="$56"
              h="$12"
              // justifyContent="center"
              alignItems="center"
            >
              <TouchableOpacity onPress={() => handleCardPress('CA')}>
                <Text fontSize="$xl" fontWeight="bold">
                  CA
                </Text>
              </TouchableOpacity>
            </Box>
          </Link>
        </Box>
        <Box
          maxWidth="$64"
          borderColor="#171717"
          borderRadius="$lg"
          borderWidth="$1"
          my="$4"
          backgroundColor="$white"
          overflow="hidden"
          sx={{
            '@base': {
              mx: '$5',
            },
          }}
        >
          <Link href="/" asChild>
            <Box
              m="$4"
              w="$56"
              h="$12"
              // justifyContent="center"
              alignItems="center"
            >
              <TouchableOpacity onPress={() => handleCardPress('CMA')}>
                <Text fontSize="$xl" fontWeight="bold">
                  CMA
                </Text>
              </TouchableOpacity>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseSelectionView;
