import { Link } from 'expo-router';
import { useState } from 'react';

import {
  Button,
  FormControl,
  Input,
  InputField,
  ButtonText,
  Box,
  Text,
} from '@gluestack-ui/themed';
const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <Box
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: '$3xl',
        borderTopRightRadius: '$3xl',
        // Android
        elevation: 5,
        // iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
      }}
    >
      <Box alignItems="center">
        <Box mb={34} alignItems="center">
          <Text fontSize="$2xl" color="black">
            Welcome to
          </Text>
          <Box alignItems="center" mt={10}>
            <Text fontSize="$3xl" fontWeight="bold" color="#86198f">
              AUDIRE
            </Text>
          </Box>
        </Box>
        <Box mb={34}>
          <FormControl mb={4}>
            <Input
              variant="outline"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChangeText={(e) => {
                  setMobileNumber(e);
                }}
              />
            </Input>
          </FormControl>
          <FormControl mb={4}>
            <Input
              variant="outline"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField type="text" placeholder="Name" />
            </Input>
          </FormControl>
        </Box>
        <Box mb={34}>
          <Link href="/verification" asChild>
            <Button variant="solid" mt={4} bg="#86198f">
              <ButtonText fontSize="$md" fontWeight="bold">
                SIGN IN
              </ButtonText>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
