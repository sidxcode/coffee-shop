import { View ,Text,Image, ImageBackground,TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Bgimage1} from '../../assets/img/beans.png'
// import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
// import { MapPinIcon } from 'react-native-heroicons/solid'

const HomeScreen = () => {
    const handleError = (e) => {console.log(e.nativeEvent.error);};
  return (
    <SafeAreaView className="flex-1">
        <ImageBackground style={{width:'100%', height:'100%'}} onError={handleError} source= {require('../../assets/img/beans.png')}>
            {/* avatar and bell icon */}
            <View className='mx-4 flex-row justify-between items-center'>
                <Image source={require('../../assets/img/avatar.png')}
                    className="h-9 w-9 rounded-full"/>
                <View className="flex-row items-center space-x-2">
                  <Text>Mapicon</Text>
                  <Text>Patia, Bhubaneshwar</Text>
                </View>
                <Text>bellicon</Text>
            </View>
            {/* Search icon */}
            <View className="mx-5 shadow" style={{marginTop: hp(2)}}>
              <View className="flex-row items-center rounded-full p-1 pr-4 bg-amber-100">
                <TextInput placeholder='Search' className='p-4 flex-1 font-semibold text-gray-700'/>
                <TouchableOpacity
                  className="rounded-full p-2"
                  // style = {{}}
                  >
                    <Text>icon</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* categories */}
            {/* <View className="px-5 mt-6">
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categorizes}
                keyExtractor={item=> item.id}
                className="overflow-visible"
                renderItem={({item})=>{
                  isActive = item.id==activeCategory;
                  let activeTextClass = isActive? 'text-white': 'text-gray-700';
                  return(
                    <TouchableOpacity
                      onPress={()=>setActiveCategory(item.id)}
                      style={}
                    >

                    </TouchableOpacity>
                  )
                }}
              >

              </FlatList>
            </View> */}
        </ImageBackground>
    </SafeAreaView>
  )
}

export default HomeScreen