import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextField = ({placeHolder,value,setValue}) => {
  return (
    <View className="  items-center m-2">
      <TextInput 
      className="border-2 w-[80%] rounded-2xl px-3  border-gray-300 overflow-x-auto"
      value={value}
        onChangeText={setValue}
      placeholder={placeHolder}
      />
    </View>
  )
}

export default TextField