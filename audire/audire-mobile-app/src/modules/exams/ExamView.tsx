import { Box, Text } from '@gluestack-ui/themed';

import React, { ComponentProps } from 'react';
import FooterView from '../common/FooterView';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const ExamView = () => {
  const CurrentExam = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text fontSize="$xs">No exams found!</Text>
    </View>
  );

  const UpcomingExam = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text fontSize="$xs">No exams found!</Text>
    </View>
  );

  const ExamHistory = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text fontSize="$xs">No exams found!</Text>
    </View>
  );

  const renderScene = SceneMap({
    Current: CurrentExam,
    Upcoming: UpcomingExam,
    History: ExamHistory,
  });

  const renderTabBar = (props: ComponentProps<typeof TabBar>) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#8D0C8A' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: '#8D0C8A', fontSize: 12 }}
    />
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Current', title: 'Current' },
    { key: 'Upcoming', title: 'Upcoming' },
    { key: 'History', title: 'History' },
  ]);

  return (
    <Box flex={1} width="$full">
      <Text fontSize="$xl" color="black" fontWeight="$bold" ml="$5" py="$5">
        Exams
      </Text>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <FooterView />
    </Box>
  );
};

export default ExamView;
