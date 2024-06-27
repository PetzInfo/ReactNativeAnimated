import React, { useState } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const SliedView = () => {
  const posX = useState( new Animated.Value(0))[0];

  const screenWidth = Dimensions.get('window').width; 

  function slideRight() {
    Animated.timing(posX, {
      toValue: screenWidth/2 - 25,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  function slideLeft() {
    Animated.timing(posX, {
      toValue: -screenWidth/2 + 25,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.slideContainer}>
      <Animated.View style={{
            width: 50,
            height: 50,
            transform: [{translateX: posX}],
            borderRadius: 25,
            backgroundColor: 'red',
      }}/>
      <View style={styles.touchables}>
        <TouchableOpacity onPress={slideLeft} style={styles.button}>
          <Text>Slide left</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={slideRight} style={styles.button}>
          <Text>Slide Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slideContainer: {
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

export default SliedView;