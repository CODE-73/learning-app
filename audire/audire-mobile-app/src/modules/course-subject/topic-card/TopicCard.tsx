import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';

import CourseSelectionPlayIcon from '/assets/courseSelectionPlayIcon.svg';

type TopicCardProps = {
  topic: string;
  href: string;
  description: string;
};

const TopicCard: FC<TopicCardProps> = ({ topic, href, description }) => {
  return (
    <Box
      display="flex"
      w="$full"
      borderColor="$black"
      borderRadius="$sm"
      my="$1"
      backgroundColor="$white"
      overflow="hidden"
      shadowColor="$black"
      shadowOffset={{ width: 1, height: 2 }}
      shadowOpacity={0.5}
      shadowRadius={5}
    >
      <Link href={href} asChild>
        <TouchableOpacity>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            p="$4"
            width="$full"
            alignItems="center"
          >
            <Box flexShrink={1}>
              <Text
                fontSize="$xl"
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                numberOfLines={2}
                isTruncated
              >
                {topic}
              </Text>
              {description && (
                <Text size="xs" isTruncated>
                  {description}
                </Text>
              )}
            </Box>
            <Box pr="$4">
              <CourseSelectionPlayIcon />
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    </Box>
  );
};

export default TopicCard;
