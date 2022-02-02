import { View, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import HomeSearch from '../../components/HomeSearch/HomeSearch';


const DestinationSearch = () => {
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();

    useEffect(() => {
      if (origin && destination) {
        console.warn("redirect")
      }
    }, [origin, destination]);
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    enablePoweredByContainer={false}
                    fetchDetails
                    onPress={(data, details = null) => {
                        setOrigin({ data, details })
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 0,
                            left: 10,
                            right: 10,
                        }
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    enablePoweredByContainer={false}
                    fetchDetails
                    onPress={(data, details = null) => {
                        setDestination({ data, details })
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 50,
                            left: 10,
                            right: 10,
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },
    textInput: {
        backgroundColor: '#fafafa',
        width: '100%',

        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fafafa',

        paddingHorizontal: 20,
        marginVertical: 6,
    },
})

export default DestinationSearch;
