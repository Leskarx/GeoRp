import { Text } from 'react-native';
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return <>

 <View className="justify-center items-center flex flex-1">
 <Text className=" text-red-700">GeoRp</Text>
 <Link href="/profile">Check your location</Link>
 </View>




  </>;
}
