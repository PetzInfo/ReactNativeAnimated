import React, { useEffect, useRef, useState } from "react";
import { Text, Animated, View, TouchableOpacity, StyleSheet } from "react-native";
import RedCircle from "../components/redCircle";

const FadeView = () => {
    const valueToAnimate = useState(new Animated.Value(0))[0];

    function fadeIn() {
        Animated.timing(valueToAnimate, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }
    function fadeOut() {
        Animated.timing(valueToAnimate, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }

	return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: valueToAnimate }}>
                <RedCircle/>
            </Animated.View>
            <View style= {styles.touchables}>
                <TouchableOpacity onPress={fadeIn} style={styles.button}>
                    <Text>Fade In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fadeOut} style={styles.button}>
                    <Text>Fade Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    touchables: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        padding: 8
      },
});


export default FadeView;