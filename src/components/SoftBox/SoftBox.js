import React, { useState } from 'react';
import { VStack, Box, Divider, NativeBaseProvider, Text, Button } from 'native-base';
import CustomNeoCard from '../CustomNeoCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { Platform, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";


const SoftBox = () => {  

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Select Date')
  const [time, setTime] = useState('Select Time')

  const onChange = (event, selectedData) => {
    const currentDate = selectedData || date
    console.log(Platform.OS)
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = 'Date: ' + tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    let fTime = 'Time: '+ tempDate.getHours() + ':' + tempDate.getMinutes()
    setText(fDate)
    setTime(fTime)

    console.log(fDate + '(' + fTime + ')')
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  return (
    <NativeBaseProvider>
        <CustomNeoCard width={300} height={365}>
            <Box>
              <VStack space={0} divider={<Divider />}>
                <Text style={styles.boxTitle}>Book a ride</Text>

                <CustomInput placeholder={'Starting Location'} size={10} />
                <CustomInput placeholder={'Ending Location'} size={10} />
                <CustomButton text={text} type='TERTIARY' onPress={() => showMode('date')} />
                <CustomButton text={time} type='TERTIARY' onPress={() => showMode('time')} />
                
                  <RNDateTimePicker 
                    testID='dateTimePicker' 
                    value={date}  
                    mode={mode} 
                    display='default' 
                    onChange={onChange}  
                    style={Platform.OS === 'ios' ? styles.dateBox : {}} 
                    />
                  <Button 
                        bgColor='#27236e' 
                        leftIcon={<FontAwesomeIcon icon={faSearch} 
                        color='white' size={20}/>} 
                        height={10} 
                        width='90%' 
                        alignSelf='center' 
                        marginTop={2} 
                    />
                
              </VStack>
            </Box>
        </CustomNeoCard>

        
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  googleInput: {
    backgroundColor: '#fafafa',
    width: '100%',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fafafa',

    paddingHorizontal: 20,
    marginVertical: 6,
  },
  dateBox: {
    alignSelf: 'center',
    width: '40%',
    margin: 5,
  },
  boxTitle: {
    margin: 7,
    color: '#27236e',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text: {
    margin: 5,
    marginVertical: 10
  }
})

export default SoftBox