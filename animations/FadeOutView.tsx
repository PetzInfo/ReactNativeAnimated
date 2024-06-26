import React, { useRef, useEffect } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";

interface FadeOutViewProps {
    duration?: number;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    trigger: boolean;
}

const FadeOutView: React.FC<FadeOutViewProps> = ({ duration = 1000, style, children, trigger }) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (trigger) {
            Animated.timing(fadeAnim, {
                toValue: 0,
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

export default FadeOutView;