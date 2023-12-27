import React, { FC, RefObject, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { Box, Text, Button, ButtonText } from '@gluestack-ui/themed';
import { useVerifyMobileOTP } from '@learning-app/auth';

type VerificationFormProps = {
  mobile: string;
  fullName: string;
  isNewUser: boolean;
};

const VerificationView: FC<VerificationFormProps> = ({
  mobile,
  fullName,
  isNewUser,
}) => {
  const [otpValues, setOTPValues] = useState(Array<string>(6).fill(''));
  const inputRefs = useRef(
    Array(6)
      .fill(0)
      .map(() => React.createRef<TextInput>())
  );

  const { trigger } = useVerifyMobileOTP();

  const handleTrigger = async () => {
    try {
      const otpString = otpValues.join('');
      if (otpString.length < 6) {
        return;
      }

      await trigger({
        mobile: mobile,
        otp: otpString,
        fullName: fullName,
      });

      if (isNewUser === true) {
        router.replace('/profile/course');
      } else {
        router.replace('/');
      }
    } catch (e) {
      alert('Wrong OTP');
      console.error('Error triggering mobile OTP:', e);
    }
  };
  const handleOtpInputChange = (index: number, value: string) => {
    let nextRef: RefObject<TextInput> | null = null;
    if (value) {
      nextRef = inputRefs.current[index + 1];
    } else if (!value && otpValues[index]) {
      nextRef = inputRefs.current[index - 1];
    }
    nextRef?.current?.focus?.();
    setOTPValues((prev) => {
      prev[index] = isNaN(parseInt(value)) ? '' : value;
      return [...prev];
    });
  };

  const renderOtpInputBoxes = () => {
    return otpValues.map((value, index) => (
      <TextInput
        key={index}
        value={otpValues[index]}
        ref={inputRefs.current[index]}
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
        onChangeText={(newValue) => handleOtpInputChange(index, newValue)}
        maxLength={1}
      />
    ));
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
            Enter the OTP that was sent on {mobile}
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
        <Box mt={20}>
          <Button
            variant="solid"
            mt="$4"
            bg="$fuchsia800"
            onPress={() => {
              handleTrigger();
            }}
          >
            <ButtonText fontSize="$md" fontWeight="bold">
              PROCEED
            </ButtonText>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationView;
