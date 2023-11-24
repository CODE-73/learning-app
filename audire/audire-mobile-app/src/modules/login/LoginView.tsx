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

// import { z } from 'zod';

// const logInSchema

const LoginView = () => {
  const image = Asset.fromURI('/assets/audire.png').uri;
  return (
    <>
      <Image
        size="sm"
        alt="test"
        borderRadius="$none"
        source={{
          uri: image,
        }}
      />
      <Text>Welcome</Text>
      <Text>To Audire</Text>
      <Input>
        <InputField type="MobileNumber" placeholder="MobileNumber" />
      </Input>
      <Input>
        <InputField type="Name" placeholder="Name" />
      </Input>
      <Link href="/verification" asChild>
        <Button>
          <ButtonText fontSize="$sm"> SIGN IN </ButtonText>
        </Button>
      </Link>
    </>
  );
};

export default LoginView;
