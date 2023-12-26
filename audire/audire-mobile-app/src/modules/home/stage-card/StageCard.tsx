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
  console.info('StageCard', { stage });
  return (
    <Box width={120} height={120} alignItems="center">
      <Link href={href} asChild>
        <TouchableOpacity>
          <Box alignItems="center" pt="$3">
            <Text
              color="black"
              fontSize="$lg"
              fontWeight="$medium"
              justifyContent="center"
              alignItems="center"
            >
              {stage}
            </Text>

            <Box pt="$10" ml="$10">
              <Icon as={ArrowRightIcon} color="#B051AE" m="$2" w="$6" h="$6" />
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    </Box>
  );
};

export default StageCard;
