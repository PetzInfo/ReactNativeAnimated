// src/animations/SlideView.tsx
import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle, Dimensions } from 'react-native';

interface SlideViewProps {
  duration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  slideSide: boolean;
}

const SlideView: React.FC<SlideViewProps> = ({ duration = 500, style, children, slideSide }) => {
  const slideAnim = useRef(new Animated.Value(slideSide ? 0 : 1)).current;

  const getScreenWidth = () => {
    return Math.round(Dimensions.get('window').width);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: slideSide ? 0 : 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [slideSide, slideAnim, duration]);

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
