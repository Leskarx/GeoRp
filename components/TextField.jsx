import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextField = ({placeHolder,value,setValue}) => {
  return (
    <View className="w-full  items-center m-2">
      <TextInput 
      className=" shadow-lg text-white w-[80%] bg-violet-700  rounded-2xl px-3 py-1 font-semibold overflow-x-auto"
      value={value}
        onChangeText={setValue}
      placeholder={placeHolder}
      placeholderTextColor={'#C0C0C0'}
      />
    </View>
  )
}

export default TextField