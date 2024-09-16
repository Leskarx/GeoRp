import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return ( 
  <Stack>
    <Stack.Screen name='sign-in' options={{
      headerShown: false,
      animation: 'slide_from_right'
    }}/>
    <Stack.Screen name='sign-up' options={{
      headerShown: false,
      animation: 'slide_from_right'
    }}/>
  </Stack>
  )
}

export default AuthLayout