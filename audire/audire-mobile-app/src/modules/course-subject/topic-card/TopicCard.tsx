import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box, Image } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

type TopicCardProps = {
  topic: string;
  href: string;
  description: string;
};

const TopicCard: FC<TopicCardProps> = ({ topic, href, description }) => {
  const PlayIcon = Asset.fromURI('/assets/courseSelectionPlayIcon.svg').uri;
  return (
    <Box
      flex={1}
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
              <Image
                alt="PlayIcon"
                size="xs"
                source={{
                  uri: PlayIcon,
                }}
              />{' '}
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    </Box>
  );
};

export default TopicCard;
