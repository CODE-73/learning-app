import React, { useState } from 'react';

import { TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Box, Text } from '@gluestack-ui/themed';

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
            borderColor: '#DAC0D98C',
            borderRadius: 5,
            fontSize: 20,
            textAlign: 'center',
            width: 40,
            height: 40,
            marginRight: 5,
            backgroundColor: '#DAC0D98C',
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
    <Box display="flex" flex={1} justifyContent="center" w="$full" px="$4">
      <Box display="flex" mb="$6">
        <Text fontSize="$2xl" fontWeight="bold" color="black" pl="$6">
          Verify
          <Text color="$fuchsia800" fontWeight="bold" fontSize="$2xl" ml="$1">
            OTP
          </Text>
        </Text>

        <Box my="$1.5" alignItems="center">
          <Text fontSize="$sm" fontWeight="bold" color="black">
            Enter the OTP that was sent on (+91) 8778878898
          </Text>
        </Box>
      </Box>
      <Box alignItems="center" display="flex">
        <Box flexDirection="row" mb="$8">
          {renderOtpInputBoxes()}
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box mr="$8">
            <Text fontSize="$sm" color="black" fontWeight="bold">
              Resend OTP
            </Text>
          </Box>
          <Box ml="$8">
            <Link href="/login" asChild>
              <Text fontSize="$sm" color="black" fontWeight="bold">
                Edit Number
              </Text>
            </Link>
          </Box>
        </Box>
        {/* <Box mt={20}>
          <Link href="/profile/course" asChild>
            <Button variant="solid" mt="$4" bg="$fuchsia800">
              <ButtonText fontSize="$md" fontWeight="bold">
                PROCEED
              </ButtonText>
            </Button>
          </Link>
        </Box> */}
      </Box>
    </Box>
  );
};

export default VerificationView;
