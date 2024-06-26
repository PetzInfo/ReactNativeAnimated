import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle, View } from 'react-native';

interface RotateViewProps {
  duration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  rotate: boolean;
}

const RotateView: React.FC<RotateViewProps> = ({ duration = 1000, style, children, rotate }) => {
  const rotateAnim = useRef(new Animated.Value(rotate ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: rotate ? 0 : 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [rotate, rotateAnim, duration]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.View style={[style, { transform: [{ rotate: rotateInterpolate }] }]}>
      {children}
    </Animated.View>
  );
};

export default RotateView;
