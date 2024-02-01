import {
  Box,
  Button,
  ButtonText,
  FormControl,
  Input,
  InputField,
  InputSlot,
  Text,
} from '@gluestack-ui/themed';
import { useSendMobileOTP } from '@learning-app/auth';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const { trigger, isMutating: isTriggeringMobileOTP } = useSendMobileOTP();

  const handleTrigger = async () => {
    try {
      if (!isNewUser) {
        const r = await trigger({ mobile: `+91${mobileNumber}` });
        setIsNewUser(r.isNewUser);
        setMobileNumber(r.mobile);
        if (!r.isNewUser) {
          router.replace({
            pathname: 'verification',
            params: {
              mobile: r.mobile,
              isNewUser: 0,
            },
          });
        }
      } else {
        // Route to Verification Page with fullName
        if (fullName.length === 0) {
          return;
        }
        router.push({
          pathname: 'verification',
          params: {
            mobile: mobileNumber,
            fullName: fullName,
            isNewUser: 1,
          },
        });
      }
    } catch (e) {
      console.error('Error triggering mobile OTP:', e);
    }
  };

  return (
    <Box display="flex" flex={1} justifyContent="center" w="$full">
      <Box alignItems="center" bg="$white" py="$5" px="$5" w="$full">
        <Box mb="$9" alignSelf='flex-start'>
          <Text fontSize="$xl" color="black" fontWeight="bold">
            Welcome to
          </Text>

          <Text fontSize="$2xl" fontWeight="bold" color="#8D0C8A">
            Audire
            <Text fontSize="$2xl" fontWeight="bold" color="black">
              !
            </Text>
          </Text>
        </Box>
        <FormControl mb="$1" w="$full">
          <Input
            variant="outline"
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={isNewUser ?? false}
          >
            <InputSlot pl="$2">
              <Text>+91</Text>
            </InputSlot>
            <InputField
              lineHeight={22}
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              keyboardType="numeric"
              onChangeText={(e) => {
                let t = '';
                for (const c of e) {
                  if (isNaN(parseInt(c)) || c === ' ') {
                    continue;
                  }
                  t += c;
                }
                setMobileNumber(t);
              }}
            />
          </Input>
        </FormControl>
        {isNewUser ? (
          <FormControl mb="$1" w="$full">
            <Input
              variant="outline"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                type="text"
                lineHeight={22}
                placeholder="Name"
                onChangeText={(e) => {
                  setFullName(e);
                }}
              />
            </Input>
          </FormControl>
        ) : null}
        <Box mb="$1" w="$full"  opacity={mobileNumber.length === 10 ? 1 : 0.7}>
          <Button
            variant="solid"
            mt="$1"
            bg="#B051AE"
            onPress={() => {
              handleTrigger();
            }}
            disabled={mobileNumber.length !== 10}
          >
            {isTriggeringMobileOTP ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <ButtonText fontSize="$md" fontWeight="bold">
                Continue
              </ButtonText>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
