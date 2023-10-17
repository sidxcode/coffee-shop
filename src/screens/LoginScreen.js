import { View, Text, TouchableOpacity, ImageBackground, TextInput, Image} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bgimage1 from '../../assets/img/beansBackground2.png';
import {themeColors} from '../theme';
import { EnvelopeIcon , LockClosedIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({}) => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
        <ImageBackground source={Bgimage1} className="h-full w-full relative">
            <View style={{height:hp(80) , width: wp(100)}} className="bg-white rounded-3xl absolute top-1/4">
                
                <View className="flex-1 items-center">
                    <Text className="font-semibold text-xl mt-11" >Welcome Back !</Text>
                    
                    {/* input */}
                    <View className="mt-4">

                        {/* Email */}
                        <View style={{width:wp(85), backgroundColor: '#DFDFDF'}} className="mt-4 border-white rounded-xl">
                            <TextInput placeholder='Email' className="p-5 text-gray-500"></TextInput>
                        </View>
                        {/* Password */}
                        <View style={{width:wp(85), backgroundColor: '#DFDFDF'}} className="mt-4 border-white rounded-xl">
                            <TextInput placeholder='Password' className="p-5 text-gray-500"></TextInput>
                        </View>

                    </View>
                    
                    {/* Log in */}
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <View style={{width:wp(85), backgroundColor: themeColors.bgLight}} className="mt-10 border-black border-2 rounded-2xl items-center">
                        <Text className="p-4">Log In</Text>
                    </View>
                    </TouchableOpacity>

                    
                    <View className="mt-4 flex-row justify-center items-center">
                        <View className="pr-4">
                            <View style={{width:wp(30), height:wp(0.75)}} className="bg-black">
                            </View>
                        </View>
                        <View>
                            <Text className="text-base">or</Text>
                        </View>
                        <View className="pl-4">
                            <View style={{width:wp(30), height:wp(0.75)}} className="bg-black">
                            </View>
                        </View>
                    </View>

                    {/* google and fb */}
                    <View className="flex-row mt-4">
                        
                        <TouchableOpacity>
                            <View style={{height:hp(6), width:hp(6)}} className=" bg-gray-200 rounded-lg justify-center items-center mr-8">
                            <Image style={{height:hp(4), width:hp(4)}} source={require('../../assets/icons/google.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{height:hp(6), width:hp(6)}} className=" bg-gray-200 rounded-lg justify-center items-center ml-8">
                            <Image style={{height:hp(4), width:hp(4)}} source={require('../../assets/icons/facebook.png')}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                    
                    <View className="flex-row justify-center items-center m-4">
                        <Text className="m-2">Don't have an account?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                            <Text style={{color: themeColors.bgLight}}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginScreen