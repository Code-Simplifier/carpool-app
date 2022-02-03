import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View, Alert } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHome, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FormControl, Input, VStack, NativeBaseProvider } from 'native-base'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import { useNavigation, useRoute } from "@react-navigation/native"
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'




const ConfirmEmail = () => {

    const route = useRoute()
    const navigation = useNavigation()
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {username: route?.params?.username}
    })

    const username = watch('username')

    const onConfirmPressed = async (data) => { 
        try {
            await Auth.confirmSignUp(data.username, data.code)
            Alert.alert('Success', 'Your email has been registered successfully')
            navigation.navigate('Login')
        } catch (e) {
            Alert.alert('Error', e.message)
        }
    }

    const onResendPressed = async () => {
        try {
            await Auth.resendSignUp(username)
            Alert.alert('A new code was sent to your email.')
        } catch (e) {
            Alert.alert('Error', e.message)
        }
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
                                        <CustomInput 
                                            name="username"
                                            control={control}
                                            secureTextEntry={false} 
                                            size={10} 
                                            rules={{
                                              required: 'Username was not specified',
                                              minLength: {
                                                value: 5,
                                                message: 'Username must be 5 characters long'
                                              }  
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Code</FormControl.Label>
                                        <CustomInput 
                                            name="code"
                                            control={control}
                                            secureTextEntry={false} 
                                            size={10} 
                                            rules={{
                                              required: 'Code was not specified',
                                            }}
                                        />
                                    </FormControl>
                                    <CustomButton text="Resend Code" type='SECONDARY' onPress={onResendPressed} />
                                    <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
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
