// src/animations/ScaleView.tsx
import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

interface ScaleViewProps {
  duration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  visible: boolean;
}

const ScaleView: React.FC<ScaleViewProps> = ({ duration = 500, style, children, visible }) => {
  const scaleAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: visible ? 1 : 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [visible, scaleAnim, duration]);

  return (
    <Animated.View style={[style, { transform: [{ scale: scaleAnim }] }]}>
      {children}
    </Animated.View>
  );
};

export default ScaleView;
