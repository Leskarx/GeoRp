import React from 'react';
import { View, Text } from 'react-native';

const PunchInButton = () => {
  return (
    <View className="items-center justify-center  ">
      {/* Outer Circle */}
      <View
        className="bg-white rounded-full shadow-2xl items-center justify-center"
        style={{
          width: 150,
          height: 150,
        }}
      >
        {/* Middle Circle */}
        <View
          className="bg-white rounded-full"
          style={{
            width: 120,
            height: 120,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.05,
            shadowRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Inner Circle with slight color variation */}
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              backgroundColor: '#f9f9f9',
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
      </View>
    </View>
  );
};

export default PunchInButton;
