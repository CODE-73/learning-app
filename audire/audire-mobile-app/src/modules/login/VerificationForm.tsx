import React, { useState } from 'react';
import { PenSquare } from 'lucide-react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Box, Button, ButtonText, ButtonIcon } from '@gluestack-ui/themed';

const VerificationView = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handleOtpInputChange = (index, value) => {
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: '53px',
        borderTopRightRadius: '53px',
        // Android
        elevation: 5,
        // iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 50,
      }}
    >
      <Box alignItems="center">
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Enter OTP</Text>
        <Box mt={35} mb={20} style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ fontSize: 14 }}>We have sent the OTP code to </Text>
          <Text style={{ fontWeight: 'bold', paddingRight: 10 }}>
            87******47
          </Text>
          <Link href="/login" asChild>
            <Button
              borderRadius=""
              size="lg"
              p="$3.5"
              bg="$indigo600"
              borderColor="$indigo600"
            >
              {/* EditIcon is imported from 'lucide-react-native' */}
              <ButtonIcon as={PenSquare} />
            </Button>
          </Link>
        </Box>
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          {renderOtpInputBoxes()}
        </View>

        <TouchableOpacity
          onPress={() => {
            // Resend OTP logic here
          }}
        >
          <Text style={{ fontSize: 14, color: 'blue', fontWeight: 'bold' }}>
            RESEND OTP
          </Text>
        </TouchableOpacity>
        <Box mt={20}>
          <Link href="/profile/course" asChild>
            <Button variant="solid" mt={4} bg="#86198f">
              <ButtonText fontSize="$md" fontWeight="bold">
                PROCEED
              </ButtonText>
            </Button>
          </Link>
        </Box>
      </Box>
    </View>
  );
};

export default VerificationView;
