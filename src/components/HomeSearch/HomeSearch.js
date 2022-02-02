import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../CustomButton";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'




const HomeSearch = () => {
    return (
        <View>
            {/*  Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText} >Where To?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#27236e'} />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} color={'#27236e'} />
                </View>
            </View>

            {/* Previous destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
                </View>
                <Text style={styles.destinationText}>Work</Text>
            </View>

            {/* Home destination */}
            <View style={styles.row}>
                <View style={[styles.iconContainer]}>
                    <Entypo name={'home'} size={20} color={'#ffffff'} />
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
            {/* <CustomButton text="New ride" /> */}
            <NativeBaseProvider>
                <Button
                    bgColor='#27236e'
                    leftIcon={<FontAwesomeIcon icon={faPlus}
                        color='white' size={25} />}
                    // height={10}
                    size={50}
                    width='90%'
                    alignSelf='center'
                    marginTop={2}
                    style={{marginBottom: 100}}
                />
            </NativeBaseProvider>

        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
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
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb',
    },
    iconContainer: {
        backgroundColor: '#27236e',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    },
});

export default HomeSearch;