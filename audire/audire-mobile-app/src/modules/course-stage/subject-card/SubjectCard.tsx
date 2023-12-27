import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';

import CourseSelectionPlayIcon from '/assets/courseSelectionPlayIcon.svg';

type SubjectCardProps = {
  subject: string;
  href: string;
  description?: string;
};

const SubjectCard: FC<SubjectCardProps> = ({ subject, href, description }) => {
  return (
    <Box
      display="flex"
      w="$full"
      h="$20"
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
            alignItems="center"
            justifyContent="space-between"
            p="$4"
            width="$full"
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
                {subject}
              </Text>
              {description && (
                <Text size="xs" isTruncated>
                  {description}
                </Text>
              )}
            </Box>
            <Box>
              <CourseSelectionPlayIcon />
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    </Box>
  );
};

export default SubjectCard;
