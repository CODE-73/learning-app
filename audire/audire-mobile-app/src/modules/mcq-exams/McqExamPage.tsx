import React, { ComponentProps, FC } from 'react';
import { Box, Text, Button, ButtonText } from '@gluestack-ui/themed';
import { StyleSheet, Image } from 'react-native';
import { Asset } from 'expo-asset';
import { type McqQuestion } from '@learning-app/syllabus';
import { TouchableOpacity } from 'react-native';
import { ChevronRightIcon, ChevronLeftIcon } from '@gluestack-ui/themed';
import AllQuestions from './AllQuestions';
import { useState } from 'react';
import Congratulations from './Congratulations';
import SubmitDialog from './SubmitDialog';

type McqExamPageProps = ComponentProps<typeof Box> & {
  questions: McqQuestion[];
};

const ListIconStyles = StyleSheet.create({
  ListIcon: {
    width: 20,
    height: 20,
  },
});
const quiteIconStyles = StyleSheet.create({
  quiteIcon: {
    width: 14,
    height: 13,
  },
});

const McqExamPage: FC<McqExamPageProps> = ({ questions }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSubimtModal, setShowSubimtModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const options = [
    { id: 'A', label: questions[0]?.options?.[0] },
    { id: 'B', label: questions[0]?.options?.[1] },
    { id: 'C', label: questions[0]?.options?.[2] },
    { id: 'D', label: questions[0]?.options?.[3] },
  ];

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const ListIcon = Asset.fromURI('/assets/mcqQuestionListIcon.svg').uri;
  const quiteIcon = Asset.fromURI('/assets/quiteIcon.svg').uri;

  return (
    <Box w="$full">
      <Box display="flex" flexDirection="row" justifyContent="flex-end" pr="$4">
        <Box>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Box pt="$1.5">
              <Image
                alt="ListIcon"
                style={ListIconStyles.ListIcon}
                source={{
                  uri: ListIcon,
                }}
              />
            </Box>
          </TouchableOpacity>
          {showModal && (
            <AllQuestions
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />
          )}
        </Box>
        <TouchableOpacity onPress={() => setShowSubmitDialog(true)}>
          <Box
            display="flex"
            flexDirection="row"
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
            bgColor="#e5e5e5"
            ml="$4"
            p="$1"
            px="$3"
            borderRadius="$full"
          >
            <Text color="#8D0C8A" mr="$2">
              Quit
            </Text>
            <Image
              alt="quiteIcon"
              style={quiteIconStyles.quiteIcon}
              source={{
                uri: quiteIcon,
              }}
            />
          </Box>
        </TouchableOpacity>

        <SubmitDialog
          isOpen={showSubmitDialog}
          onClose={() => setShowSubmitDialog(false)}
        />
      </Box>
      {/* start */}
      <Box>
        <Box>
          <Box
            borderRadius="$sm"
            mt="$16"
            mb="$2"
            backgroundColor="#e5e5e5"
            mx={17}
            pl="$4"
          >
            <Box pb="$16">
              <Text fontWeight="$semibold" fontSize={10} pt="$1.5">
                Question 1/15
              </Text>
              <Text fontWeight="$bold">{questions[0]?.question}</Text>
            </Box>
          </Box>
        </Box>

        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleOptionClick(option.id)}
          >
            <Box
              display="flex"
              flexDirection="row"
              borderRadius="$sm"
              backgroundColor={
                selectedOption === option.id ? '#94B6BB' : '#e5e5e5'
              }
              mx={17}
              p="$2"
              mb="$2"
              alignItems="center"
            >
              <Box
                bg="#F9E2F9"
                p="$2"
                width="$10"
                alignItems="center"
                borderRadius="$lg"
              >
                <Text color="black" fontWeight="$bold">
                  {option.id}
                </Text>
              </Box>

              <Text fontWeight="$bold" pl="$10">
                {option.label}
              </Text>
            </Box>
          </TouchableOpacity>
        ))}

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          pt="$16"
        >
          <TouchableOpacity>
            <Box
              bg="#e5e5e5"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width={150}
              p="$2"
              borderRadius="$lg"
            >
              <ChevronLeftIcon />
              <Text color="black">Previous</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box
              bg="#e5e5e5"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width={150}
              p="$2"
              borderRadius="$lg"
            >
              <Text color="black">Next</Text>
              <ChevronRightIcon />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      <TouchableOpacity>
        <Box m="$6">
          <Button
            variant="solid"
            mt="$1"
            bg="#8D0C8A"
            onPress={() => setShowSubimtModal(true)}
          >
            <ButtonText fontSize="$md" fontWeight="bold">
              Submit
            </ButtonText>
          </Button>
        </Box>
      </TouchableOpacity>
      <Congratulations
        isOpen={showSubimtModal}
        onClose={() => setShowSubimtModal(false)}
      />
    </Box>
  );
};
export default McqExamPage;
