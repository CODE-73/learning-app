import { Box, Text } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import React from 'react';
import { Image } from 'react-native'; // Import the Image component

const CourseTopicView = () => {
  // Sample data for each section
  const sectionsData = [
    { title: 'Video Class', content: ' Video Class ' },
    { title: 'Study Material', content: 'Study Material ' },
    { title: 'Sample Questions', content: ' Sample Questions ' },
    { title: 'Sample MCQs', content: 'Sample MCQs ' },
  ];
  const image = Asset.fromURI('/assets/audire-video-class.jpg').uri;
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      flex={1}
      bgColor="white"
      w="$full"
      borderTopLeftRadius="$3xl"
      borderTopRightRadius="$3xl"
      //Android
      elevation="$1.5"
      // iOS
      shadowColor="black"
      shadowOpacity="$40"
      shadowRadius="$8"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
    >
      <Box flexDirection="column" alignItems="center">
        {/* Title */}
        <Text fontSize="$xl" fontWeight="bold" mb="$2.5" mt="$2.5">
          CA - PHOENIX
        </Text>

        {/* Description */}
        <Text fontSize="$md" mb="$5">
          This is a brief description of the course topic.
        </Text>
      </Box>

      {/* Render 'Video Class' section separately */}
      {sectionsData
        .filter((section) => section.title === 'Video Class')
        .map((section, index) => (
          <Box
            flexDirection="column"
            alignItems="center"
            w="$full"
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$2"
            my="$4"
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
            key={index}
            mb="$5"
          >
            <Text fontSize="$xs" fontWeight="bold" mb="$2.5">
              {section.title}
            </Text>
            <Text>{section.content}</Text>
            <Box
              width="100%"
              maxWidth="$64"
              borderColor="$borderLight200"
              borderRadius="$lg"
              borderWidth="$1"
              my="$4"
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
              <Image
                source={{
                  uri: image,
                }}
              />
            </Box>
          </Box>
        ))}

      {/* Render other sections */}
      {sectionsData
        .filter((section) => section.title !== 'Video Class')
        .map((section, index) => (
          <Box key={index} mb="$5">
            <Text fontSize="$xs" fontWeight="bold" mb="$2.5">
              {section.title}
            </Text>
            <Text>{section.content}</Text>
          </Box>
        ))}
    </Box>
  );
};

export default CourseTopicView;
