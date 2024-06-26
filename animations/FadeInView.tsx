import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native';

interface FadeInViewProps extends ViewProps {
  duration?: number;
  style?: StyleProp<ViewStyle>;
}

const FadeInView: React.FC<FadeInViewProps> = ({ duration = 1000, children, style, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View style={[style, { opacity: fadeAnim }]} {...props}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
