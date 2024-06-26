// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native';
import FadeView from '../animations/FadeView';
import SlideView from '../animations/SlideView';
import ScaleView from '../animations/ScaleView';

const HomeScreen: React.FC = () => {
    const [visibility, setVisibility] = useState(false);
    const [slideVisibility, setSlideVisibility] = useState(false);
    const [scaleVisibility, setScaleVisibility] = useState(false);
    
    const getScreenWidth = () => {
        return Math.round(Dimensions.get('window').width);
    };

    return (
        <SafeAreaView style={styles.container}>
            
            <FadeView style={styles.fadingContainer} visibility={visibility}>
                <Text style={styles.fadingText}>Fade Content</Text>
            </FadeView>
            <View style={styles.buttonRow}>
                <Button title="Toggle visibility!" onPress={() => setVisibility(prev => !prev)} />
            </View>
            <View style={styles.containerForSlide} >    
                <SlideView style={styles.slidingContainer} visible={slideVisibility}>
                    <Text style={styles.fadingText}>Slide Content</Text>
                </SlideView>
            </View>
            <View style={styles.buttonRow}>
                <Button title="Slide it!" onPress={() => setSlideVisibility(prev => !prev)} />
            </View>
            <ScaleView style={styles.scalingContainer} visible={scaleVisibility}>
                <Text style={styles.scalingText}>Scale Content</Text>
            </ScaleView>
            <View style={styles.buttonRow}>
                <Button title="Scale it!" onPress={() => setScaleVisibility(prev => !prev)} />
            </View>
            
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
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
    containerForSlide: {
        width: '100%',
        alignItems: 'flex-start',
        borderColor: '#f1f1f1',
        borderWidth: 1,
    },
    slidingContainer: {
      width: '50%',
      alignItems: 'center',
      backgroundColor: 'powderblue',
      padding: 16,
      borderRadius: 8,
    },
    buttonRow: {
      flexBasis: 100,
      justifyContent: 'space-evenly',
      marginVertical: 16,
    },
    scalingContainer: {
      width: '100%',
      alignItems: 'center',
      backgroundColor: 'powderblue',
      padding: 16,
      borderRadius: 8,
    },
    scalingText: {
        fontSize: 28,
    },
});

export default HomeScreen;
