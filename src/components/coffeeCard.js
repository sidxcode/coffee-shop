import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { ArrowUpRightIcon } from 'react-native-heroicons/solid'

const CoffeeCard = ({coffee}) => {
  return (
    <View className="mx-2 mt-2">
      <View style={{height:hp(25), width:wp(38)}} className="rounded-3xl border-black border-2 relative">
        <View style={{height:hp(15), width:wp(33) , marginHorizontal : wp(2), marginVertical: wp(2) , backgroundColor:themeColors.bgLight}} className="relative rounded-3xl border-black border-2" >
          <Image
            source = {coffee.image}
            style={{height: hp(13), width: wp(28), left: wp(2), top: wp(3) }}
            className= "absolute"
            />
        </View>
        <View style={{marginLeft: wp(2), bottom: wp(10)}} className="absolute">
          <Text className="font-semibold text-base">{coffee.name}</Text>
        </View>
        <View style={{marginLeft: wp(2), bottom: wp(7)}} className="absolute">
          <Text className="text-sm">coffee bean</Text>
        </View>
        <View style={{marginLeft: wp(2), bottom: wp(2)}} className="absolute">
          <Text className="text-sm font-semibold">Rs.{coffee.price}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: themeColors.bgDark,  height: wp(9), width: wp(9), right: wp(2) , bottom : wp(5)}} className="rounded-3xl justify-center items-center absolute">
          <ArrowUpRightIcon
            size="20"
            color="#fff"
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CoffeeCard;