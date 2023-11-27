import React from 'react';
import { View, Text } from 'react-native';

const CourseTopicView = () => {
  // Sample data for each section
  const sectionsData = [
    { title: 'Video Class', content: ' Video Class ' },
    { title: 'Study Material', content: 'Study Material ' },
    { title: 'Sample Questions', content: ' Sample Questions ' },
    { title: 'Sample MCQs', content: 'Sample MCQs ' },
  ];

  return (
    <View>
      {/* Title */}
      <Text style={styles.title}>Course Title</Text>

      {/* Description */}
      <Text style={styles.description}>
        This is a brief description of the course topic.
      </Text>

      {/* Sections */}
      {sectionsData.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text>{section.content}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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