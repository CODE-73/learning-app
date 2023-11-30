import React, { useState } from 'react';
import { PenSquare } from 'lucide-react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import {
  Box,
  Button,
  ButtonText,
  ButtonIcon,
  Text,
} from '@gluestack-ui/themed';

const VerificationView = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handleOtpInputChange = (index: number, value: string) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const renderOtpInputBoxes = () => {
    const otpBoxes = [];

    for (let i = 0; i < 6; i++) {
      otpBoxes.push(
        <TextInput
          key={i}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            fontSize: 20,
            textAlign: 'center',
            width: 40,
            height: 40,
            marginRight: 5,
          }}
          keyboardType="numeric"
          value={otpValues[i]}
          onChangeText={(value) => handleOtpInputChange(i, value)}
          maxLength={1}
        />
      );
    }

    return otpBoxes;
  };

  return (
    <Box
      display="flex"
      flex={1}
      justifyContent="center"
      alignItems="center"
      w="$full"
      bg="white"
      borderTopLeftRadius="$3xl"
      borderTopRightRadius="$3xl"
      // Android
      elevation="$1.5"
      // iOS
      shadowColor="black"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity="$95"
      shadowRadius="$7"
    >
      <Box alignItems="center">
        <Text fontSize="$md" fontWeight="bold">
          Enter OTP
        </Text>

        <Box
          mt={35}
          mb={20}
          alignItems="center"
          display="flex"
          flexDirection="row"
        >
          <Text fontSize="$sm">We have sent the OTP code to </Text>
          <Text fontWeight="bold">87******47</Text>
          <Link href="/login" asChild>
            <Button size="md" paddingLeft="$2.5" bgColor="rgba(0, 0, 0, 0)">
              <ButtonIcon color="blue" as={PenSquare} />
            </Button>
          </Link>
        </Box>
        <Box flexDirection="row" mb="$8">
          {renderOtpInputBoxes()}
        </Box>

        <TouchableOpacity
          onPress={() => {
            // Resend OTP logic here
          }}
        >
          <Text fontSize="$sm" color="blue" fontWeight="bold">
            RESEND OTP
          </Text>
        </TouchableOpacity>
        <Box mt={20}>
          <Link href="/profile/course" asChild>
            <Button variant="solid" mt="$4" bg="#86198f">
              <ButtonText fontSize="$md" fontWeight="bold">
                PROCEED
              </ButtonText>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationView;
