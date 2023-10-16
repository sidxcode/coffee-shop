import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import { themeColors } from '../theme'
import ProductScreen from '../screens/ProductScreen'

const appNavigation = () => {
  return (
    <View>
      <Text>appNavigation</Text>
    </View>
  )
}

export default appNavigation