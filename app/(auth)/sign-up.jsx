import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PunchInButton from '../../components/PunchIn'
import TimeComponents from '../../components/TimeComponents'
import Icon from 'react-native-vector-icons/Ionicons';

const signUp = () => {
  return (
    <SafeAreaView className=" h-full bg-slate-300">
      <ImageBackground className="h-[99vh]" source={require(
        "../../assets/background.jpg"
      )}>
        <View  className="h-[70vh] justify-evenly   ">
        <Icon name="reload" size={30} color="#900" /> 

        <TimeComponents/>
        <PunchInButton/>
        <Text>
          
        </Text>

        </View>

        
      </ImageBackground>

    </SafeAreaView>

 

 
  )
}

export default signUp



// <View>
// <View className="flex items-center justify-center h-screen bg-gray-100">
// <View className="relative">
// <View className="absolute inset-0 bg-white rounded-full" style="width: 350px; height: 350px; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);"></View>

// <View className="absolute inset-0 bg-gray-50 rounded-full" style="width: 320px; height: 320px; box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);"></View>

// <View className="relative flex items-center justify-center w-72 h-72 bg-gradient-to-b from-white to-gray-100 rounded-full shadow-md">
//   <View className="flex flex-col items-center">
//  <Text>
//  PUNCH IN
//  </Text>
//   </View>
// </View>
// </View>
// </View>

// </View>