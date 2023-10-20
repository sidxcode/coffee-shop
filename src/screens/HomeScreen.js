import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { coffeeItems } from '../constants';
// import Carousel from 'react-native-snap-carousel';
import { BellIcon, MagnifyingGlassIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import Bgimage from '../../assets/img/beans.png';
import { ArrowUpRightIcon } from 'react-native-heroicons/solid'
import CoffeeCard from '../components/CoffeeCard';
import { themeColors } from '../theme';
const HomeScreen = () => {

  return (
    <SafeAreaView>
      <ImageBackground source={Bgimage} className="h-full w-full relative">
        <View className="flex-row items-center justify-between p-5">

          <View>

            <View className="flex-row items-center">
              <Text className="mr-2">Hi,</Text>
              <Text className="font-semibold text-base">Siddharth</Text>
            </View>

            <Text className="">Let's find a good coffee bean for you !</Text>

          </View>

          <View className>
            <ShoppingBagIcon color="black" size='30' />
          </View>

        </View>

        {/* Search */}
        <View style={{ width: wp(90) }} className="flex-row mx-5 bg-gray-10 py-4 rounded-3xl border-black border-2">
          <View className="mx-3">
            <MagnifyingGlassIcon color="black" size='30' />
          </View>
          <View>
            <TextInput placeholder='Search coffee beans...' />
          </View>
        </View>

        {/* most popular
        <View className="flex-row items-center m-5 justify-between ">
          <Text className="font-semibold text-lg">Most popular 🔥</Text>
          <TouchableOpacity>
            <Text className="underline">See all</Text>
          </TouchableOpacity>
        </View> */}

          
          
        <View className="flex justify-center items-center mt-5">
          
          <FlatList 
            data={coffeeItems}
            numColumns={2}
            renderItem={({item}) => <CoffeeCard coffee = {item}/>}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        
      </ImageBackground>
    </SafeAreaView>
  )
}

export default HomeScreen