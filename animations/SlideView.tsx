// src/animations/SlideView.tsx
import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle, Dimensions } from 'react-native';

interface SlideViewProps {
  duration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  visible: boolean;
}

const SlideView: React.FC<SlideViewProps> = ({ duration = 500, style, children, visible }) => {
  const slideAnim = useRef(new Animated.Value(visible ? 0 : 1)).current;

  const getScreenWidth = () => {
    return Math.round(Dimensions.get('window').width);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim, duration]);

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, getScreenWidth()/2] 
  });

  return (
    <Animated.View style={[style, { transform: [{ translateX }] }]}>
      {children}
    </Animated.View>
  );
};

export default SlideView;
