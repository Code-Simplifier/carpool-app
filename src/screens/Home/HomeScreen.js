import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View, SafeAreaView, FlatList } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import KeyboardAvoider from '../../components/KeyboardAvoider'
import SoftBox from '../../components/SoftBox'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { GOOGLE_MAPS_APIKEY } from "@env";



const HomeScreen = () => {
    return (
        <KeyboardAvoider>
            <ScrollView style={styles.container}>
                <View style={styles.topView}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size={60} color='white' />
                    <Text style={styles.appName}>Carpool App</Text>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <Text style={styles.text}>Welcome back! <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 21, textTransform: 'uppercase'}}>Shabad</Text></Text>
                        {/* <Text style={styles.subtext}>Shabad</Text> */}
                        {/* <GooglePlacesAutocomplete 
                            // style={styles.googleInput} 
                            nearbyPlacesAPI='GooglePlacesSearch' 
                            debounce={400} 
                            placeholder='starting location' 
                            query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }} 
                            enablePoweredByContainer={false}
                            // onPress={(data, details=null) => {
                            //     console.log(data)
                            // }}
                            /> */}
                        <SoftBox />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoider>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#27236e',
        fontSize: 30,
    },
    topView: {
        backgroundColor: '#27236e',
        height: Dimensions.get('window').height / 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: 'white',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    appName: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtext: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    container: {
        backgroundColor: '#fff',
    }
})

export default HomeScreen
