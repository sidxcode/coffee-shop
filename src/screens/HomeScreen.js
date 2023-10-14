import { View ,Text,Image, ImageBackground,TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import {categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
// import {Bgimage1} from '../../assets/img/beans.png'
// import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
// import { MapPinIcon } from 'react-native-heroicons/solid'
import {themeColors} from '../theme';
const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState(1);
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
              <View className="flex-row items-center rounded-full p-1 pr-4 bg-[#e6e6e6]">
                <TextInput placeholder='Search' className='p-4 flex-1 font-semibold text-gray-700'/>
                <TouchableOpacity
                  className="rounded-full p-2"
                  style = {{backgroundColor: themeColors.bgLight}}>
                    <Text>icon</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* categories */}
            <View className="px-5 mt-6">
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={item=> item.id}
                className="overflow-visible"
                renderItem={({item})=>{
                  isActive = item.id==activeCategory;
                  let activeTextClass = isActive? 'text-white': 'text-gray-700';
                  return(
                    <TouchableOpacity
                      onPress={()=>setActiveCategory(item.id)}
                      style={{backgroundColor: isActive? themeColors.bgLight: 'rgba(0,0,0,0,0.7)'}}
                      className="p-4 px-5 mr-2 rounded-full shadow"
                    >
                      <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>

                    </TouchableOpacity>
                  )
                }}
              />
            </View>

            {/* coffee card */}

            <View>
              <View>
                <Carousel
                  containerCustomStyle={{overflow: 'visible'}}
                  data={coffeeItems}
                  renderItem={({item})=> <CoffeeCard item={item}/>}
                  firstItem={1}
                  loop={true}
                  inactiveSlideScale={0.75}
                  inactiveSlideOpacity={0.75}
                  sliderWidth={width}
                  itemWidth={width*0.63}
                  slideStyle={{display: 'flex', alignItems: 'center'}}
                />
              </View>
            </View>
        </ImageBackground>
    </SafeAreaView>


  )
}

export default HomeScreen