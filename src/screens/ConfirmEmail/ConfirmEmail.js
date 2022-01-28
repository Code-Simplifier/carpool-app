import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View, Alert } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHome, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FormControl, Input, VStack, NativeBaseProvider } from 'native-base'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import { useNavigation } from "@react-navigation/native"



const ConfirmEmail = () => {
    const navigation = useNavigation()
    const onConfirmPressed = () => { 
        Alert.alert('Success', 'Your email has been registered successfully')
        navigation.navigate('Login')
    }
    const onWhyPressed = () => {
        Alert.alert('Why confirm your email?', 'This step is fail safe for any non existing or deleted email accounts being used to create a CARPOOL APP account.')
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
                        <Text style={styles.text}>Confirm Email</Text>
                        <Text onPress={onWhyPressed} >Why this step??</Text>
                        <View style={{ marginTop: 10 }}>
                            <NativeBaseProvider>
                                <VStack>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Username</FormControl.Label>
                                        {/* <Input style={styles.input} /> */}
                                        <CustomInput secureTextEntry={false} size={10} />
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Code</FormControl.Label>
                                        {/* <Input style={styles.input} /> */}
                                        <CustomInput secureTextEntry={false} size={10} />
                                    </FormControl>
                                    <CustomButton text="Resend Code" type='SECONDARY' />
                                    <CustomButton text="Confirm" onPress={onConfirmPressed} />
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

export default ConfirmEmail
