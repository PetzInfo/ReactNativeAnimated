// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import FadeInView from '../animations/FadeInView';

const HomeScreen: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <FadeInView style={styles.fadingContainer} trigger={fadeIn}>
        <Text style={styles.fadingText}>Content of the FadeInView</Text>
      </FadeInView>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={() => setFadeIn(prev => !prev)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 16,
    backgroundColor: 'powderblue',
    borderRadius: 8,
    marginBottom: 10,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default HomeScreen;
