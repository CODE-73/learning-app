import { Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import React from 'react';
import { Image, Text } from 'react-native'; // Import the Image component

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
      sx={{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: '$3xl',
        borderTopRightRadius: '$3xl',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
      }}
    >
      <Box flexDirection="column" alignItems="center">
        {/* Title */}
        <Text style={styles.title}>CA - PHOENIX</Text>

        {/* Description */}
        <Text style={styles.description}>
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
            width="100%"
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
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>
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
                h={150}
                width="100%"
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
          <Box key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text>{section.content}</Text>
          </Box>
        ))}
    </Box>
  );
};

const styles = {
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
};

export default CourseTopicView;
