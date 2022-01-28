import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View, Alert } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHome, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FormControl, Input, VStack, NativeBaseProvider } from 'native-base'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import { useNavigation } from "@react-navigation/native"



const NewPassword = () => {
    const navigation = useNavigation()
    const onChangePassPressed = () => { 
        Alert.alert('Success', 'Your password has been changed.')
        navigation.navigate('Login')
    }
    return (
        <KeyboardAvoider>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.topView}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size={60} color='white' />
                    <Text style={styles.appName}>Carpool App</Text>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <Text style={styles.text}>New Password<Text style={{ color: 'black', fontStyle: 'italic', fontSize: 21, textTransform: 'uppercase' }}></Text></Text>
                        {/* <Text style={{alignSelf: 'center', marginBottom: 20, fontSize: 14}}>Enter your username and we will send you a code which will allow you to reset the password for your account.</Text> */}
                        <View style={{ marginTop: 10 }}>
                            <NativeBaseProvider>
                                <VStack>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Code</FormControl.Label>
                                        {/* <Input style={styles.input} /> */}
                                        <CustomInput secureTextEntry={false} size={10} />
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>New Password</FormControl.Label>
                                        {/* <Input style={styles.input} /> */}
                                        <CustomInput secureTextEntry={true} size={10} />
                                    </FormControl>
                                    <CustomButton text="Change Password" onPress={onChangePassPressed} />
                                </VStack>
                            </NativeBaseProvider>
                        </View>
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
        height: Dimensions.get('window').height / 2.5,
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
    form: { marginVertical: 5 },
    input: { borderRadius: 10, borderColor: '#27236e' },
    container: {
        backgroundColor: '#fff'
    }
})

export default NewPassword
