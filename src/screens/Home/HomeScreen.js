import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View, SafeAreaView, FlatList} from 'react-native'
import { NativeBaseProvider, Button } from 'native-base'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import KeyboardAvoider from '../../components/KeyboardAvoider'
import SoftBox from '../../components/SoftBox'
import HomeMap from '../../components/HomeMap/HomeMap'
import CovidMessage from '../../components/CovidMessage/CovidMessage'
import HomeSearch from '../../components/HomeSearch/HomeSearch'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'



const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View style={styles.topView}>
                <HomeMap />
            </View>
            <View style={styles.bottomView}>
                <HomeSearch />
            </View>
            
            {/* <CustomButton text="click me" onPress={navigation.navigate('Destination')} /> */}
            {/* <CovidMessage /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#27236e',
        fontSize: 30,
    },
    topView: {
        // backgroundColor: '#27236e',
        height: Dimensions.get('window').height / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: 'white',
        bottom: 50,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
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
