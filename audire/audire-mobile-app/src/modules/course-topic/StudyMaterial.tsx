import { Box, Text } from '@gluestack-ui/themed';
import React, { ComponentProps, FC, useState } from 'react';
import { Platform, TouchableOpacity, Modal, View, Button } from 'react-native';
import DownloadPDFIcon from '/assets/downloadPdf.svg';
import * as WebBrowser from 'expo-web-browser';
import { useR2Download } from '@learning-app/r2';

type StudyMeterialProps = ComponentProps<typeof Box> & {
  r2Key: string;
};

const StudyMeterial: FC<StudyMeterialProps> = (props) => {
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const { r2Key } = props;
  const { trigger: getURL, isMutating } = useR2Download();

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
      setErrorModalVisible(true);
    }
  };

  const closeModal = () => {
    setErrorModalVisible(false);
  };

  return (
    <>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={closeModal}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View
            style={{ padding: 20, backgroundColor: 'white', borderRadius: 10 }}
          >
            <Text>Error while loading</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default StudyMeterial;
