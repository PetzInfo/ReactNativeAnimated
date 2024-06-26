import React, { useEffect, useRef } from "react";
import { StyleProp, ViewStyle, Animated } from "react-native";

interface FadeViewProps {
    duration?: number;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    visibility: boolean;
}

const FadeView: React.FC<FadeViewProps> = ({ duration = 1000, style, children, visibility }) => {
    const fadeAnim = useRef(new Animated.Value(visibility ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visibility ? 1 : 0,
            duration: duration,
            useNativeDriver: true,
        }).start();
    }, [visibility, fadeAnim, duration]);

    return (
        <Animated.View style={[style, { opacity: fadeAnim }]}>
            {children}
        </Animated.View>
    );
};

export default FadeView;