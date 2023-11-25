import { useState } from 'react';
import { Link } from 'expo-router';
import verification from '../../app/verification';
import {
  Center,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
  Toast,
  Box,
  CheckIcon,
  Checkbox,
  Icon,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  FormControlHelper,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  ButtonText,
  ButtonIcon,
  Image,
  Divider,
  ArrowLeftIcon,
  Heading,
  LinkText,
  ScrollView,
  InputSlot,
  Pressable,
} from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

const LoginView = () => {
  const image = Asset.fromURI('/assets/audire.png').uri;
  return (
    <ScrollView>
      <VStack space={4} alignItems="center">
        <Image
          size="lg"
          alt="Audire Logo"
          borderRadius="md"
          source={{
            uri: image,
          }}
        />
        <Heading fontSize="xl" fontWeight="bold">
          Welcome to
        </Heading>
        <Heading fontSize="xl" fontWeight="bold" color="gray.500">
          Audire
        </Heading>

        <FormControl>
          <Input>
            <InputField type="text" placeholder="Mobile Number" />
          </Input>
        </FormControl>
        <FormControl>
          <Input>
            <InputField type="text" placeholder="Name" />
          </Input>
        </FormControl>
        <Link href="/verification" asChild>
          <Button variant="primary">
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
