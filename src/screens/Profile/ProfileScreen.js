import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faEdit } from "@fortawesome/free-solid-svg-icons"
import Cars from '../../components/Cars/Cars';
import History from '../../components/History';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { Auth } from 'aws-amplify';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import { Button, NativeBaseProvider } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ProfileScreen = () => {

    const navigation = useNavigation()
    const onArrowPressed = () => {
        navigation.navigate('Home')
    }
    const onSignOutPressed = () => {
        // Auth.signOut()
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <View style={styles.topView}>
                <Image source={require("../../../assets/halo.jpg")} style={styles.img} resizeMode='contain' />
            </View>
            <View style={styles.bottomView}>
                <View style={styles.inputBox}>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Shabad</Text>
                        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>codesimplifier@gmail.com</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        {/* <AntDesign name={'clockcircle'} size={16} color={'#27236e'} /> */}
                        <NativeBaseProvider>
                            <Button backgroundColor="#27236e" size={6} leftIcon={<Icon name="account-edit" size={25} color='white' />} alignSelf="center" />
                        </NativeBaseProvider>
                        {/* <Text style={{color:'white', fontWeight: 'bold'}}>EDIT</Text> */}
                        {/* <MaterialIcons name={'keyboard-arrow-down'} size={16} color={'#27236e'} /> */}
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>17</Text>
                        <Text style={[styles.text, styles.subText]}>Orders</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#27236e", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>4</Text>
                        <Text style={[styles.text, styles.subText]}>Rides</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>2</Text>
                        <Text style={[styles.text, styles.subText]}>Cars</Text>
                    </View>
                </View>
                <History />
                <Cars />
                <CustomButton text="Sign Out" onPress={onSignOutPressed} type='DANGER' />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 70,
        padding: 10,
        backgroundColor: '#27236e',
        color: 'white',
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        // backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
    },
    topView: {
        // backgroundColor: '#27236e',
        height: Dimensions.get('window').height / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        flex: 2,
        backgroundColor: 'white',
        bottom: 50,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff"
    // },
    // text: {
    //     fontFamily: "HelveticaNeue",
    //     color: "#52575D"
    // },
    img: {
        flex: 1,
        // height: undefined,
        // width: undefined
    },
    // titleBar: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     marginTop: 24,
    //     marginHorizontal: 16
    // },
    // subText: {
    //     fontSize: 12,
    //     color: "#AEB5BC",
    //     textTransform: "uppercase",
    //     fontWeight: "500"
    // },
    // profileImage: {
    //     width: 150,
    //     height: 150,
    //     borderRadius: 100,
    //     overflow: "hidden",
    //     // backgroundColor: 'red',

    // },
    // dm: {
    //     backgroundColor: "#41444B",
    //     position: "absolute",
    //     top: 20,
    //     width: 40,
    //     height: 40,
    //     borderRadius: 20,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // active: {
    //     backgroundColor: "#34FFB9",
    //     position: "absolute",
    //     bottom: 28,
    //     left: 10,
    //     padding: 4,
    //     height: 20,
    //     width: 20,
    //     borderRadius: 10
    // },
    // add: {
    //     backgroundColor: "#27236e",
    //     position: "absolute",
    //     bottom: 0,
    //     right: 0,
    //     width: 50,
    //     height: 50,
    //     borderRadius: 30,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // infoContainer: {
    //     alignSelf: "center",
    //     alignItems: "center",
    //     marginTop: 16
    // },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    // mediaImageContainer: {
    //     width: 180,
    //     height: 200,
    //     borderRadius: 12,
    //     overflow: "hidden",
    //     marginHorizontal: 10
    // },
    // mediaCount: {
    //     backgroundColor: "#41444B",
    //     position: "absolute",
    //     top: "50%",
    //     marginTop: -50,
    //     marginLeft: 30,
    //     width: 100,
    //     height: 100,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     borderRadius: 12,
    //     shadowColor: "rgba(0, 0, 0, 0.38)",
    //     shadowOffset: { width: 0, height: 10 },
    //     shadowRadius: 20,
    //     shadowOpacity: 1
    // },
    // recent: {
    //     marginLeft: 78,
    //     marginTop: 32,
    //     marginBottom: 6,
    //     fontSize: 10
    // },
    // recentItem: {
    //     flexDirection: "row",
    //     alignItems: "flex-start",
    //     marginBottom: 16
    // },
    // activityIndicator: {
    //     backgroundColor: "#CABFAB",
    //     padding: 4,
    //     height: 12,
    //     width: 12,
    //     borderRadius: 6,
    //     marginTop: 3,
    //     marginRight: 20
    // }
})

export default ProfileScreen
