import React from 'react';
import { View, Text } from 'react-native';

const PunchInButton = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      {/* Outer Circle with shadow */}
      <View
        className="absolute bg-white rounded-full shadow-2xl -z-50"
        style={{
          width: 350,
          height: 350,
         
        }}
      />

      {/* Middle Circle with subtle shadow */}
      <View
        className="absolute  bg-white rounded-full"
        style={{
          width: 320,
          height: 320,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.05,
          shadowRadius: 20,
        }}
      />

      {/* Inner Circle with slight color variation */}
      <View
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          backgroundColor: '#f9f9f9', // Simulating gradient by using a light color
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
        }}
      >
        {/* Text in the center */}
        <Text className="text-lg font-medium text-gray-500">PUNCH IN</Text>
      </View>
    </View>
  );
};

export default PunchInButton;
