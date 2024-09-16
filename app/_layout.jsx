 import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
export default function RootLayout() {
  return (
    <Stack>
     
        <Stack.Screen name='index' options={{
            headerShown: false,
            animation:"slide_from_right",
          
         
        }}/>
         <Stack.Screen name='(auth)' options={{
            headerShown: false,
            animation:"slide_from_right",
          
         
        }}/>
       
    </Stack>
  )
}