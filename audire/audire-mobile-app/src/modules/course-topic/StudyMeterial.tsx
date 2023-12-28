import { Box, Text } from '@gluestack-ui/themed';
import React, { ComponentProps, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import DownloadPDFIcon from '/assets/downloadPdf.svg';

type StudyMeterialProps = ComponentProps<typeof Box>;

const StudyMeterial: FC<StudyMeterialProps> = (props) => {
  const pdfUri =
    'https://pub-3fe5f60b517c4b64841ac747be486004.r2.dev/Study Meterials/thereactnativebook-sample.pdf'; // Replace with your PDF URL

  const handlePdfOpen = () => {
    router.push({
      pathname: '/common/pdf-viewer',
      params: {
        url: pdfUri,
      },
    });
  };

  return (
    <Box mx={17} borderRadius="$sm" my="$1" backgroundColor="#e5e5e5" py="$6">
      <TouchableOpacity onPress={handlePdfOpen}>
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
              Study Material
            </Text>
          </Box>
          <Box pr="$4">
            <DownloadPDFIcon />
          </Box>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default StudyMeterial;
