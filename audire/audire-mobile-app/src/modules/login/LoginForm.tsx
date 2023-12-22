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
    <Box display="flex" flex={1} justifyContent="center" w="$full" px="$4">
      <Box mb="$9">
        <Text fontSize="$3xl" color="black" fontWeight="bold" mb="$3">
          Welcome to
        </Text>

        <Text fontSize="$4xl" fontWeight="bold" color="#8D0C8A">
          Audire
          <Text fontSize="$4xl" fontWeight="bold" color="black">
            !
          </Text>
        </Text>
      </Box>

      <Box alignItems="center">
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
              placeholder="Mobile Number"
              value={mobileNumber}
              onChangeText={(e) => {
                setMobileNumber(e);
              }}
            />
          </Input>
        </FormControl>
        {/* <FormControl mb="$1" w="$full">
          <Input
            variant="outline"
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField type="text" placeholder="Name" />
          </Input>
        </FormControl> */}

        <Box mb="$1" w="$full">
          <Link href="/verification" asChild>
            <Button variant="solid" mt="$1" bg="#B051AE">
              <ButtonText fontSize="$md" fontWeight="bold">
                Continue
              </ButtonText>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
