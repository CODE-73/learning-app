import React, { FC } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Box } from '@gluestack-ui/themed';

type SubjectCardProps = {
  subject: string;
  href: string;
  description?: string;
};

const SubjectCard: FC<SubjectCardProps> = ({ subject, href, description }) => {
  return (
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
        <Link href={href} asChild>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{subject}</Text>
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </TouchableOpacity>
        </Link>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 15,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SubjectCard;
