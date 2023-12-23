import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box, Image } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

type SubjectCardProps = {
  subject: string;
  href: string;
  description?: string;
};

const SubjectCard: FC<SubjectCardProps> = ({ subject, href, description }) => {
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
          >
            <Box pl="$4" mt="$2">
              <Text
                fontSize="$xl"
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {subject}
              </Text>
              {description && <Text size="xs">{description}</Text>}
            </Box>
            <Box pr="$4">
              <Image
                alt="loginBackroudImage"
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

export default SubjectCard;
