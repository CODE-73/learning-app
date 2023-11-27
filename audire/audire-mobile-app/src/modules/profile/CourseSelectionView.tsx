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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: '53px',
        borderTopRightRadius: '53px',
        // Android
        elevation: 5,
        // iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 50,
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
      <Link href="/" asChild>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardPress('CMA')}
        >
          <Text style={styles.cardText}>CMA</Text>
        </TouchableOpacity>
      </Link>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'lightblue',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CourseSelectionView;
