import React from "react";
import { View, StyleSheet } from "react-native";

const RedCircle =() => {
    return (
        <View style={ styles.redCircle}/>
    );

};

const styles = StyleSheet.create({
    redCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
    }
});

export default RedCircle;