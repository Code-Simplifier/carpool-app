import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>
                Help flatten the curve. If you must travel, then please exercise caution for your safety and the safety of our community
            </Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#27236e',
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        color: '#bed9ff',
        fontSize: 15,
        marginBottom: 10,
    },
    learnMore: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default CovidMessage;
