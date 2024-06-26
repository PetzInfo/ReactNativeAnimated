// src/animations/FadeInView.tsx
import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

interface FadeInViewProps {
  duration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  trigger: boolean;
}

const FadeInView: React.FC<FadeInViewProps> = ({ duration = 1000, style, children, trigger }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (trigger) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start();
    }
  }, [trigger, fadeAnim, duration]);

  return (
    <Animated.View style={[style, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
