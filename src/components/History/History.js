import React from 'react'
import { StyleSheet } from 'react-native'
import { VStack, Box, Divider, NativeBaseProvider, Text, Button } from 'native-base';
import CustomNeoCard from '../CustomNeoCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const History = () => {
    return (
        <NativeBaseProvider>
            <CustomNeoCard width={300} height={290}>
                <Box>
                <VStack space={0} divider={<Divider />}>
                    <Text style={styles.boxTitle}>Order History</Text>
                    <Text style={styles.text} > JALANDHAR to AMRITSAR : <Text style={{ fontWeight: 'bold' }}>Rs. 210</Text> </Text>
                    <Text style={styles.text} > MUMBAI to GOA : <Text style={{ fontWeight: 'bold' }}>Rs. 6000</Text> </Text>
                    <Text style={styles.text} > WORK to HOME : <Text style={{ fontWeight: 'bold' }}>Rs. 100</Text> </Text>
                    <Text style={styles.text} > HOME to WORK  : <Text style={{ fontWeight: 'bold' }}>Rs. 100</Text> </Text>

                    <Button 
                    bgColor='#27236e' 
                    leftIcon={<FontAwesomeIcon icon={faArrowRight} 
                    color='white' size={20}/>} 
                    height={10} 
                    width='90%' 
                    alignSelf='center' 
                    marginTop={2} />
                    
                </VStack>
                </Box>
            </CustomNeoCard>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
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

export default History
