import React, { useState } from 'react';
import {
  Box,
  Text,
  Avatar,
  Center,
  Input,
  InputField,
  Button,
  ButtonText,
  AvatarFallbackText,
  ScrollView,
} from '@gluestack-ui/themed';

import { useActiveUser, useUpdateProfile } from '@learning-app/auth';
import FooterView from '../common/FooterView';
import { Icon, TrashIcon } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import ConfirmDeleteAccountDialog from './ConfirmDeleteAccountDialog';

const ProfileView = () => {
  const {
    user: { firstName, lastName, mobile, id: profileId },
  } = useActiveUser();

  const { trigger, isMutating } = useUpdateProfile();
  const [newFirstName, setNewFirstName] = useState(firstName || '');
  const [newLastName, setNewLastName] = useState(lastName || '');
  const [showModal, setShowModal] = useState(false);
  const handleSaveClick = () => {
    trigger({
      profileId,
      data: {
        firstName: newFirstName,
        lastName: newLastName,
      },
    });
  };

  const formattedFirstName: string | undefined = firstName ?? undefined;
  const formattedLastName: string | undefined = lastName ?? undefined;
  const formattedmobile: string | undefined = mobile ?? undefined;
  return (
    <Box flex={1} width="$full" display="flex" flexDirection="column" gap="$5">
      <ScrollView>
        <Center display="flex" flexDirection="column" p="$5" gap="$3">
          <Avatar bgColor="#D6A8D4" size="lg" borderRadius="$full">
            <AvatarFallbackText fontWeight="bold" color="black">
              {firstName}
            </AvatarFallbackText>
          </Avatar>

          <Center>
            <Text
              fontWeight="bold"
              color="black"
              fontSize="$xl"
              numberOfLines={2}
              textAlign="center"
            >
              {firstName} {lastName}
            </Text>
          </Center>
        </Center>

        <Center display="flex" flexDirection="column" gap="$4" px="$12">
          <Center display="flex" flexDirection="column" alignItems="flex-start">
            <Text fontWeight="bold" fontSize="$xs">
              First Name
            </Text>
            <Input
              w="$full"
              variant="outline"
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                lineHeight={22}
                placeholder={formattedFirstName}
                value={newFirstName}
                onChangeText={(text) => setNewFirstName(text)}
              />
            </Input>
          </Center>
          <Center display="flex" flexDirection="column" alignItems="flex-start">
            <Text fontWeight="bold" fontSize="$xs">
              Last Name
            </Text>
            <Input
              w="$full"
              variant="outline"
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                lineHeight={22}
                value={newLastName}
                onChangeText={(text) => setNewLastName(text)}
                placeholder={formattedLastName}
              />
            </Input>
          </Center>
          <Center display="flex" flexDirection="column" alignItems="flex-start">
            <Text fontWeight="bold" fontSize="$xs">
              {' '}
              Mobile
            </Text>
            <Input
              w="$full"
              variant="outline"
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={true}
            >
              <InputField placeholder={formattedmobile} />
            </Input>
          </Center>

          <Center display="flex" flexDirection="column" alignItems="flex-start">
            <Text fontWeight="bold" fontSize="$xs">
              {' '}
              Email
            </Text>
            <Input
              w="$full"
              variant="outline"
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField lineHeight={22} />
            </Input>
          </Center>
          <Center display="flex" flexDirection="column" alignItems="flex-start">
            <Text fontWeight="bold" fontSize="$xs">
              {' '}
              City
            </Text>
            <Input
              w="$full"
              variant="outline"
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField lineHeight={22} />
            </Input>
          </Center>
        </Center>
        <TouchableOpacity>
          <Button
            m="$10"
            size="md"
            variant="solid"
            action="primary"
            bg="#8D0C8A"
            isDisabled={isMutating}
            isFocusVisible={false}
            onPress={handleSaveClick}
          >
            <ButtonText>Update Profile</ButtonText>
          </Button>
        </TouchableOpacity>

        <Center>
          <Button
            onPress={() => {
              setShowModal(true);
            }}
            size="xs"
            variant="outline"
            action="negative"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Delete Account</ButtonText>
            <Icon as={TrashIcon} m="$2" w="$4" h="$4" color="$red" />
          </Button>

          {showModal && (
            <ConfirmDeleteAccountDialog
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />
          )}
        </Center>
      </ScrollView>

      <FooterView />
    </Box>
  );
};

export default ProfileView;
