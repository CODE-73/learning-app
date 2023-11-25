import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const CourseSelectionView = () => {
  const handleCardPress = (course) => {
    // Handle card press logic here
    console.log(`Selected course: ${course}`);
  };

  return (
    <View style={styles.container}>
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
    </View>
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
