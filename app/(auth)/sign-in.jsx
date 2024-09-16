import { View, Text } from 'react-native'
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
    <SafeAreaView className=" h-full bg-slate-500">
     <View className="h-full   ">
    <View className="">
    <Text className="text-white text-2xl">
        Current Time: {currentTime.time}
      </Text>
      <Text className="text-white text-sm">
         {currentTime.date}
      </Text>
    </View>
    {/* form started */}
    <View className="">
      <TextField placeHolder="USERNAME" value={username} setValue={setUsername} />
      <TextField placeHolder="PASSWORD" value={password} setValue={setPassword} />

    </View>

     </View>

    </SafeAreaView>
  )
}

export default signIn