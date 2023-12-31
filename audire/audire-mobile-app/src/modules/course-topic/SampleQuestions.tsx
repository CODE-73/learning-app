import React, { ComponentProps, FC } from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import DownloadPdf from '/assets/downloadPdf.svg';

type SampleQuestionsProps = ComponentProps<typeof Box>;

const SampleQuestions: FC<SampleQuestionsProps> = (props) => {
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
              fontSize="$xl"
              fontWeight="bold"
              justifyContent="center"
              alignItems="center"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Sample Questions
            </Text>
          </Box>
          <Box pr="$4">
            <DownloadPdf />
          </Box>
        </Box>
      </TouchableOpacity>
      {/* </Link> */}
    </Box>
  );
};
export default SampleQuestions;
