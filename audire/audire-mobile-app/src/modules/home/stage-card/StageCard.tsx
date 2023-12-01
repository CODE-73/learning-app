import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';

type StageCardProps = {
  stage: string;
  href: string;
};

const StageCard: FC<StageCardProps> = ({ stage, href }) => {
  return (
    <Box flexDirection="column" alignItems="center" mt="$24">
      <Box
        maxWidth="$64"
        borderColor="$black"
        borderRadius="$lg"
        borderWidth="$1"
        my="$4"
        backgroundColor="$white"
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
          <Box
            m="$4"
            w="$64"

            // h="$12"
          >
            <TouchableOpacity>
              <Text
                fontSize="$xl"
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
              >
                {stage}
              </Text>
            </TouchableOpacity>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default StageCard;
