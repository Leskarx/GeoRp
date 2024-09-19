import { View, Text, Pressable, ImageBackground } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import TextField from '../../components/TextField';
import TimeComponents from '../../components/TimeComponents';
import { router } from 'expo-router';

const signIn = () => {
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  return (
    <SafeAreaView className=" h-full bg-slate-300">
      <ImageBackground className="h-[99vh]" source={require(
        "../../assets/background.jpg"
      )}>
      <View className="h-[70vh] justify-evenly   ">

   <TimeComponents/>
    {/* form started */}
    <View className=" items-center  ">
      <TextField placeHolder="Username" value={username} setValue={setUsername} />
      <TextField placeHolder="Password" value={password} setValue={setPassword} />
    <Pressable className="bg-blue-500  w-max rounded-2xl px-8 shadow-lg py-2 m-2 items-center active:bg-blue-800  " onPress={()=>[
      router.push('/sign-up')
    ]}> 
      <Text className="text-white  w-max">Sign In</Text>
    </Pressable>
    <Text className="mt-10">Don't have an account?<Text className="underline text-blue-500">
      Register
      </Text></Text>

    </View>

     </View>

      </ImageBackground>
      
     

    </SafeAreaView>
  )
}

export default signIn