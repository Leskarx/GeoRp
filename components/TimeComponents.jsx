import { Text, View } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';

export default function TimeComponents() {
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
    <View className=" items-center">
    <Text className=" text-slate-700 text-2xl">
        {currentTime.time}
      </Text>
      <Text className="text-slate-600 text-xs">
         {currentTime.date}
      </Text>
    </View>
    
  )
}
