import { Box, Image, Text, View } from '@gluestack-ui/themed';
import { useActiveUser } from '@learning-app/auth';
import HomePageBanner from 'assets/homepageBanner.jpg';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import FooterView from '../common/FooterView';
import StageCard from './stage-card/StageCard';
import { useRouter } from 'expo-router';

const CARD_COLORS = ['#D6A8D4', '#94B6BB', '#FBB6B1', '#FF33D1', '#33D1FF'];

const HomeView = () => {
  const {
    user: { firstName, optedCourse },
  } = useActiveUser();
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!optedCourse) {
      timeout = setTimeout(() => {
        router.replace('/profile/course');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [optedCourse, router]);

  if (!optedCourse) {
    return <Text>Please wait..</Text>;
  }

  // 16:9 Aspect Ratio
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  return (
    <Box flex={1} width="$full">
      <Box $lg-pb="$96">
        <Text fontSize="$xl" color="black" fontWeight="$bold" ml="$5" py="$5">
          Hello {firstName}!
        </Text>
        <Box bg="white" p="$1.5" maxHeight={dimensions.height / 1.5}>
          <Image
            borderRadius={10}
            maxHeight="$full"
            resizeMode="cover"
            $md-resizeMode="cover"
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
            alt="homepageBanner"
            source={HomePageBanner}
          />
        </Box>
        <Text fontSize="$xl" color="black" fontWeight="$medium" ml="$5" py="$5">
          Choose your stage
        </Text>
        <Box
          display="flex"
          gap="$2"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          borderRadius="$2xl"
        >
          {optedCourse.stages.map((stage, index) => (
            <View
              borderRadius="$lg"
              minHeight={dimensions.height - dimensions.height * 0.85}
              width="$1/3"
              key={stage.id}
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                backgroundColor: CARD_COLORS[index % CARD_COLORS.length],
              }}
            >
              <StageCard
                stage={stage.title}
                href={`/course-stages/${stage.id}`}
              />
            </View>
          ))}
        </Box>
      </Box>
      <FooterView />
    </Box>
  );
};

export default HomeView;
