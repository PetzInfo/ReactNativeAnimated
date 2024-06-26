// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import FadeInView from '../animations/FadeInView';
import FadeOutView from '../animations/FadeOutView';
import FadeView from '../animations/FadeView';

const HomeScreen: React.FC = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [visibility, setVisibility] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <FadeInView style={styles.fadingContainer} trigger={fadeIn}>
                <Text style={styles.fadingText}>FadeIn Content</Text>
            </FadeInView>
            <View style={styles.buttonRow}>
                <Button title="Fade sth. in!" onPress={() => setFadeIn(prev => !prev)} />
            </View>
            <FadeOutView style={styles.fadingContainer} trigger={fadeOut}>
                <Text style={styles.fadingText}>FadeOut Content</Text>
            </FadeOutView>
            <View style={styles.buttonRow}>
                <Button title="Fade sth. out!" onPress={() => setFadeOut(prev => !prev)} />
            </View>
            <FadeView style={styles.fadingContainer} visibility={visibility}>
                <Text style={styles.fadingText}>Fade Content</Text>
            </FadeView>
            <View style={styles.buttonRow}>
                <Button title="Toggle visibility!" onPress={() => setVisibility(prev => !prev)} />
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
