import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { Box } from '@gluestack-ui/themed';

const CourseSelectionView = () => {
  const handleCardPress = (course) => {
    // Handle card press logic here
    console.log(`Selected course: ${course}`);
  };

  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        // TODO: Fahim Please check
        borderTopLeftRadius: '53px',
        borderTopRightRadius: '53px',
        // Android
        elevation: 5,
        // iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
      }}
    >
      <Box
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: '100px' }}
      >
        <Box
          maxWidth="$64"
          borderColor="#171717"
          borderRadius="$lg"
          borderWidth="$1"
          my="$4"
          backgroundColor="#fdf4ff"
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
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress('CA')}
            >
              <Text style={styles.cardText}>CA</Text>
            </TouchableOpacity>
          </Link>
        </Box>
        <Box
          maxWidth="$64"
          borderColor="#171717"
          borderRadius="$lg"
          borderWidth="$1"
          my="$4"
          backgroundColor="#fdf4ff"
          overflow="hidden"
          sx={{
            '@base': {
              mx: '$5',
            },
          }}
        >
          <Link href="/" asChild>
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress('CMA')}
            >
              <Text style={styles.cardText}>CMA</Text>
            </TouchableOpacity>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 5,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CourseSelectionView;
