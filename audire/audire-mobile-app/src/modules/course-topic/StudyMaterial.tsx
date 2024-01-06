import {
  Box,
  Text,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import { useR2Download } from '@learning-app/r2';
import * as WebBrowser from 'expo-web-browser';
import React, { ComponentProps, FC } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import DownloadPDFIcon from '/assets/downloadPdf.svg';

type StudyMeterialProps = ComponentProps<typeof Box> & {
  r2Key: string;
};

const StudyMeterial: FC<StudyMeterialProps> = (props) => {
  const { r2Key } = props;
  const { trigger: getURL, isMutating } = useR2Download();
  const toast = useToast();
  const handlePdfOpen = async () => {
    try {
      const { url } = await getURL({
        key: r2Key,
      });

      if (Platform.OS === 'web') {
        window.open(url, '_blank');
      } else {
        WebBrowser.openBrowserAsync(url);
      }
    } catch (error) {
      // Handle the error here
      console.error(
        'An error occurred while getting the URL or opening the browser:',
        error
      );
      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Error downloading</ToastTitle>
                <ToastDescription>something went wrong!..</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    }
  };

  return (
    <Box mx={17} borderRadius="$sm" my="$1" backgroundColor="#e5e5e5" py="$6">
      <TouchableOpacity onPress={handlePdfOpen} disabled={isMutating}>
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
              {isMutating && ' (Loading...)'}
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
