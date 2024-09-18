import { View, Text, Pressable, ImageBackground } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import TextField from '../../components/TextField';

const signIn = () => {
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const [currentTime,setCurrentTime] = useState(getCurrentTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

  
    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const date = new Date();
    return {
      time: date.toLocaleTimeString(),
      date: date.toDateString()
    }
    // return date.toLocaleTimeString();
    // return date.toDateString();
  }

  return (
    <SafeAreaView className=" h-full bg-slate-300">
      <ImageBackground className="h-[99vh]" source={require(
        "../../assets/background.jpg"
      )}>
      <View className="h-[70vh] justify-evenly   ">
    <View className=" items-center">
    <Text className=" text-slate-700 text-2xl">
        {currentTime.time}
      </Text>
      <Text className="text-slate-600 text-xs">
         {currentTime.date}
      </Text>
    </View>
    {/* form started */}
    <View className=" items-center  ">
      <TextField placeHolder="Username" value={username} setValue={setUsername} />
      <TextField placeHolder="Password" value={password} setValue={setPassword} />
    <Pressable className="bg-blue-500  w-max rounded-2xl px-8 shadow-lg py-2 m-2 items-center active:bg-violet-800  " onPress={() => console.log(password)}> 
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