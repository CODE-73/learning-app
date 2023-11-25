import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

type SubjectCardProps = {
  subject: string;
  href: string;
  description?: string;
};

const SubjectCard: FC<SubjectCardProps> = ({ subject, href, description }) => {
  return (
    <View style={styles.container}>
      <Link href={href} asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>{subject}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
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
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default SubjectCard;
