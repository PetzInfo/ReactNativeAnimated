import React, { useRef, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

interface ScaleViewProps {
  duration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  size: number; // 0 for hidden, 1 for medium size, 2 for full size
}

const ScaleView: React.FC<ScaleViewProps> = ({ duration = 500, style, children, size }) => {
  const scaleAnim = useRef(new Animated.Value(size === 2 ? 1 : size === 1 ? 0.5 : 0)).current;

  useEffect(() => {
    let toValue;
    switch (size) {
      case 2:
        toValue = 1;
        break;
      case 1:
        toValue = 0.5;
        break;
      case 0:
      default:
        toValue = 0;
    }
    
    Animated.timing(scaleAnim, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [size, scaleAnim, duration]);

  return (
    <Animated.View style={[style, { transform: [{ scale: scaleAnim }] }]}>
      {children}
    </Animated.View>
  );
};

export default ScaleView;
