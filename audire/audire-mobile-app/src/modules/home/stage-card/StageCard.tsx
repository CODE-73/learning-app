import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';

import { ArrowRightIcon } from '@gluestack-ui/themed';
import { Icon } from '@gluestack-ui/themed';

type StageCardProps = {
  stage: string;
  href: string;
};

const StageCard: FC<StageCardProps> = ({ stage, href }) => {
  return (
    <Box>
      <Link href={href} asChild>
        <TouchableOpacity>
          <Box
            $md-display="flex"
            $md-flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color="black"
              sx={{
                '@base': {
                  size: 'xl',
                },
                '@md': {
                  size: '2xl',
                },
                '@xl': {
                  size: '6xl',
                },
              }}
              fontWeight="$medium"
            >
              {stage}
            </Text>

            <Box>
              <Icon as={ArrowRightIcon} color="#B051AE" m="$2" w="$6" h="$6" />
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    </Box>
  );
};

export default StageCard;
