import {
  VStack,
  Box,
  HStack,
  Icon,
  Text,
  Button,
  Image,
  Center,
  FormControl,
  Input,
  Link,
  LinkText,
  FormControlHelperText,
  InputField,
  ButtonText,
  ArrowLeftIcon,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Toast,
  ToastTitle,
  useToast,
  Heading,
} from '@gluestack-ui/themed';

const VerificationView = () => {
  return (
    <VStack space="xs">
      <Heading
        fontSize="$xl"
        sx={{
          '@md': { fontSize: '$2xl', pb: '$4' },
        }}
      >
        Enter OTP
      </Heading>
      <HStack space="xs" alignItems="center">
        <Text
          color="$textLight800"
          sx={{
            '@md': {
              pb: '$12',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
          fontSize="$sm"
        >
          We have sent the OTP code to
          <Text
            fontWeight="$bold"
            color="$textLight800"
            sx={{
              _dark: {
                color: '$textDark400',
              },
            }}
            fontSize="$sm"
          >
            {} 87******47
          </Text>
        </Text>
      </HStack>

      <HStack py="$8">
        <Text
          color="$textLight800"
          sx={{
            _dark: {
              color: '$textDark400',
            },
          }}
          fontSize="$sm"
        >
          Didn't receive the OTP?{' '}
        </Text>
        <Link href="">
          <LinkText fontSize="$sm">RESEND OTP</LinkText>
        </Link>
      </HStack>

      <Button
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText fontSize="$sm">PROCEED </ButtonText>
      </Button>
      <Box
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        display="flex"
      ></Box>
    </VStack>
  );
};
export default VerificationView;
