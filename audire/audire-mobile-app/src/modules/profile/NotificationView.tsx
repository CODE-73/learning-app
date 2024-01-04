import { Box, Text } from '@gluestack-ui/themed';

import React, { ComponentProps } from 'react';
import FooterView from '../common/FooterView';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const NotificationView = () => {
  const ReadMessage = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text fontSize="$xs">No Notification!</Text>
    </View>
  );

  const UnreadMessage = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text fontSize="$xs">No Notification!</Text>
    </View>
  );

  const renderScene = SceneMap({
    Read: ReadMessage,
    Unread: UnreadMessage,
  });

  const renderTabBar = (props: ComponentProps<typeof TabBar>) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#8D0C8A', borderRadius: 15 }}
      style={{ backgroundColor: '#DAC0D9', borderRadius: 8 }}
      labelStyle={{ color: '#8D0C8A', fontSize: 12 }}
    />
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Read', title: 'Read' },
    { key: 'Unread', title: 'Unread' },
  ]);
  return (
    <Box flex={1} width="$full">
      <Text fontSize="$xl" color="black" fontWeight="$bold" ml="$5" py="$5">
        Notification
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

export default NotificationView;
