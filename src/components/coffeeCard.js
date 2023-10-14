import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
// import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window');
const coffeeCard = () => {
    // const navigation =useNavigation();
    return (
    <View
        style={{
            borderRadius: 40,
            backgroundColor: themeColors.bgDark,
            height: height*0.50,
            width: width*0.65,
        }}
    >
    <View
    style={{
        shadowColor: 'black',
        shadowRadius: 30,
        shadowOffset: {width: 0, height: 40},
        shadowOpacity: 0.8,
        marginTop: 15,
    }}
    className="flex-row justify-center">
        <Image
            source={coffeeItems.image}
        />

    </View>
    </View>
  )
}

export default coffeeCard