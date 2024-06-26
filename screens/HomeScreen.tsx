// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native';
import FadeView from '../animations/FadeView';
import SlideView from '../animations/SlideView';
import ScaleView from '../animations/ScaleView';
import RotateView from '../animations/RotationView';


const HomeScreen: React.FC = () => {
    const [visibility, setVisibility] = useState(false);
    const [slideVisibility, setSlideVisibility] = useState(false);
    const [scaleSize, setScaleSize] = useState(0);
    const [rotation, setRotation] = useState(false);
    
    const getScreenWidth = () => {
        return Math.round(Dimensions.get('window').width);
    };

    const toggleScaleSize = () => {
        setScaleSize((prevSize) => (prevSize + 1) % 3);
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <FadeView style={styles.fadingContainer} visibility={visibility}>
                <Text style={styles.fadingText}>Fade me!</Text>
            </FadeView>
            <View style={styles.buttonRow}>
                <Button title="Toggle visibility!" onPress={() => setVisibility(prev => !prev)} />
            </View>
            <View style={styles.containerForSlide} >    
                <SlideView style={styles.slidingContainer} visible={slideVisibility}>
                    <Text style={styles.fadingText}>Slide me!</Text>
                </SlideView>
            </View>
            <View style={styles.buttonRow}>
                <Button title="Slide it!" onPress={() => setSlideVisibility(prev => !prev)} />
            </View>
            <ScaleView style={styles.scalingContainer} size={scaleSize}>
                <Text style={styles.scalingText}>Scale me!</Text>
            </ScaleView>
            <View style={styles.buttonRow}>
                <Button title="Scale it!" onPress={toggleScaleSize} />
            </View>
            <RotateView style={styles.fadingContainer} rotate={rotation}>
                <Text style={styles.fadingText}>Rotate me!</Text>
            </RotateView>
            <View style={styles.buttonRow}>
                <Button title="Rotate it!" onPress={() => setRotation(prev => !prev)} />
            </View>
            
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
