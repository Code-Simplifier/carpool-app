import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomNeoCard = ({ children, width, height, borderRadius }) => {
    return (
        <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
                <View
                    style={[
                        styles.inner, 
                        {
                            width: width || 40,
                            height: height || 40,
                            // borderRadius: size / 2 || 40 / 2,
                            borderRadius: 20,
                            marginTop: 30,
                            alignSelf: 'center'
                            
                        }
                    ]}
                >
                    { children }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inner: {
        backgroundColor: '#fafafa',
        borderColor: '#E2ECFD',
        borderWidth: 1,
    },
    topShadow: {
        shadowOffset: {
            width: -8,
            height: -8
        },
        shadowOpacity: 4,
        shadowRadius: 6,
        shadowColor: '#f0f0f0'
    }
})

export default CustomNeoCard
