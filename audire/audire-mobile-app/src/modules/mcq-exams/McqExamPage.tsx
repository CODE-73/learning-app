import React, { ComponentProps, FC } from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

type McqExamPageProps = ComponentProps<typeof Box>;

const McqExamPage: FC<McqExamPageProps> = (props) => {
  return (
    <Box borderRadius="$sm" my="$1" backgroundColor="#e5e5e5" mx={17} py="$6">
      {/* <Link href={'#'} asChild> */}
      <TouchableOpacity>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          p="$4"
        >
          <Box pl="$4" mt="$2">
            <Text
              color="#8D0C8A"
              fontSize="$xl"
              fontWeight="bold"
              justifyContent="center"
              alignItems="center"
              numberOfLines={1}
              ellipsizeMode="tail"
              textDecorationLine="underline"
            >
              Start MCQ Test
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
      {/* </Link> */}
    </Box>
  );
};
export default McqExamPage;
