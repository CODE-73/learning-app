import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Enter OTP</Text>

      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        We have sent the OTP code to{' '}
        <Text style={{ fontWeight: 'bold' }}>87******47</Text>
      </Text>

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        {renderOtpInputBoxes()}
      </View>

      <TouchableOpacity
        onPress={() => {
          // Resend OTP logic here
        }}
      >
        <Text style={{ fontSize: 16, color: 'blue' }}>RESEND OTP</Text>
      </TouchableOpacity>
      <Link href="/profile/course" asChild>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'blue',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
          onPress={() => {
            // Proceed button logic here
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>PROCEED</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default VerificationView;
