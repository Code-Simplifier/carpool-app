import React from 'react'
import { StyleSheet } from 'react-native'
import { VStack, Box, Divider, NativeBaseProvider, Text, Button } from 'native-base';
import CustomNeoCard from '../CustomNeoCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Cars = () => {
    return (
        <NativeBaseProvider>
            <CustomNeoCard width={300} height={200}>
                <Box>
                <VStack space={0} divider={<Divider />}>
                    <Text style={styles.boxTitle}>Your Cars</Text>
                    <Text style={styles.text} > Ford Icon (Black): <Text style={{ fontWeight: 'bold' }}>PB 02 BG 3443</Text> </Text>
                    <Text style={styles.text} > Honda City (White) : <Text style={{ fontWeight: 'bold' }}>PB 08 AR 7713</Text> </Text>
                    <Button 
                        bgColor='#27236e' 
                        leftIcon={<FontAwesomeIcon icon={faPlus} 
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

export default Cars
