import { Box, Text } from '@gluestack-ui/themed';
import React, { ComponentProps, FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
 

type PDFViewProps ={
    pdfUri:string
    closePdfViewer ?: () => void;
}


const PDFView:FC<PDFViewProps> = ({pdfUri,closePdfViewer})=> {
    return (
        <Box flex={1}>
          <Pdf 
            source={{ uri: pdfUri, cache: true }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
            }}
          />
          <TouchableOpacity onPress={closePdfViewer}>
            <Box
              position="absolute"
              top={0}
              right={0}
              p="$4"
              backgroundColor="rgba(255, 255, 255, 0.7)"
            >
              <Text fontSize="$lg" color="black">
                Close
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      )
} 

export default PDFView;