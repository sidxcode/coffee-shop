import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'
import HomeScreen from './src/screens/HomeScreen'
import Navigation from './src/navigation/appNavigation'
// import { useFonts } from 'expo-font'
// import AppLoading from 'expo-app-loading'

const App = () => {
  // let [fontsLoaded] = useFonts({
  //   'Montserrat-Regular' : require('./assets/fonts/Montserrat/Monsterrat-Regular.ttf'),
  //   'Montserrat-SemiBold' : require('./assets/fonts/Montserrat/Monsterrat-SemiBold.ttf'),
  // });

  // if(!fontsLoaded){
  //   return <AppLoading/>
  // }
    return (
    <Navigation/>
    )
    
}

export default App