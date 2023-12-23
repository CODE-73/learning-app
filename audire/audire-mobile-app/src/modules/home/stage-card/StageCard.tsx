import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Text, Box } from '@gluestack-ui/themed';

import { HiArrowLongRight } from 'react-icons/hi2';

type StageCardProps = {
  stage: string;
  href: string;
};

const StageCard: FC<StageCardProps> = ({ stage, href }) => {
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
              <HiArrowLongRight color="B051AE" fontSize={40} />
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    </Box>
  );
};

export default StageCard;
