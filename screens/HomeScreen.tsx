import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FadeInView from '../animations/FadeInView';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FadeInView style={styles.container}>
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
      </FadeInView>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        padding: 16,    
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
});

export default HomeScreen;
