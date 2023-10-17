import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import { themeColors } from '../theme'
import ProductScreen from '../screens/ProductScreen'

const Stack = createNativeStackNavigator();

const appNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Signup" component={SignupScreen}/>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Product" component={ProductScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default appNavigation