import { Link } from 'expo-router';

import {
  Button,
  FormControl,
  Input,
  VStack,
  InputField,
  ButtonText,
  Image,
  Heading,
  ScrollView,
} from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

const LoginView = () => {
  const image = Asset.fromURI('/assets/audire.png').uri;
  return (
    <ScrollView>
      <Image
        size="2xl"
        alt="Audire Logo"
        borderRadius="md"
        source={{
          uri: image,
        }}
      />
      <VStack alignItems="center">
        <Heading fontSize="xl" fontWeight="bold">
          Welcome to
        </Heading>
        <Heading fontSize="xl" fontWeight="bold" color="gray.500">
          Audire
        </Heading>

        <FormControl mb={4}>
          <Input>
            <InputField type="text" placeholder="Mobile Number" />
          </Input>
        </FormControl>
        <FormControl mb={4}>
          <Input>
            <InputField type="text" placeholder="Name" />
          </Input>
        </FormControl>

        <Link href="/verification" asChild>
          <Button variant="primary" mt={4}>
            <ButtonText fontSize="md" fontWeight="bold">
              SIGN IN
            </ButtonText>
          </Button>
        </Link>
      </VStack>
    </ScrollView>
  );
};

export default LoginView;
