import React, { FC, useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import SidebarContent from './SidebarContent';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const animConfig = {
  duration: 500,
  easing: Easing.inOut(Easing.poly(3)),
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const drawerPosition = useSharedValue(-250); // Assuming drawer width of 250.

  const drawerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: drawerPosition.value }],
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isOpen ? 0.2 : 0, animConfig),
      display: isOpen ? 'flex' : 'none',
      pointerEvents: isOpen ? 'auto' : 'none',
    };
  });

  useEffect(() => {
    toggleDrawer();
  }, [isOpen]);

  const toggleDrawer = () => {
    drawerPosition.value = withTiming(isOpen ? 0 : -250, animConfig);
  };

  return (
    <>
      <Animated.View style={[styles.drawer, drawerStyle]}>
        <SidebarContent onClose={() => setIsOpen(false)} />
      </Animated.View>

      <AnimatedPressable
        style={[styles.overlay, overlayStyle]}
        onPress={() => setIsOpen(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    width: 250,
    height: '100%',
    zIndex: 10,
    elevation: 10,
  },
  overlay: {
    zIndex: 9,
    elevation: 9,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
});

export default Sidebar;
