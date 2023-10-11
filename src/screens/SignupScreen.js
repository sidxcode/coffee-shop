import { View, Text, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bgimage from '../../assets/img/beans.png';

const SignupScreen = () => {
  return (
    <View className="flex-1">
    <ImageBackground source={Bgimage} className="h-full w-full">
    <SafeAreaView className="flex-1 justify-center items-center">
        <View style={{height:hp(55) , width:wp(80)}} className=" bg-amber-900 rounded-3xl flex justify-center items-center">
            <View style={{width:wp(65)}} className="mt-4 border-white bg-white rounded-xl">
                <Text className="p-4">Name</Text>
            </View>
            <View style={{width:wp(65)}} className="mt-4 border-white bg-white rounded-xl">
                <Text className="p-4">Email</Text>
            </View>
            <View style={{width:wp(65)}} className="mt-4 border-white bg-white rounded-xl">
                <Text className="p-4">Password</Text>
            </View>
            <View style={{width:wp(65)}} className="mt-4 border-white bg-white rounded-xl">
                <Text className="p-4">Confirm Password</Text>
            </View>
            <TouchableOpacity>
                <View style={{width:wp(63)}} className="mt-10 border-white bg-white rounded-3xl items-center">
                    <Text className="p-4">Sign Up</Text>
                </View>
            </TouchableOpacity>
            <View className="mt-5">
                <Text>Already have an account?</Text>
                <TouchableOpacity className="items-center"><Text className="font-bold">SIGN IN</Text></TouchableOpacity>
            </View>
        </View>
        
    </SafeAreaView>
    </ImageBackground>
    </View>
  )
}

export default SignupScreen