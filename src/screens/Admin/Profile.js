import { useNavigation } from "@react-navigation/native";
import react from "react";
import { View, Image, Text, SafeAreaView, Dimensions, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const {width, height} = Dimensions.get('window');

export default function ProfileAdmin() {
  const navigation = useNavigation();
  const handleNavigateToHome = () => {
    navigation.navigate('Home'); 
  };

   return (
    <View className = "flex-1">
    <ImageBackground className = 'w-full h-full flex-1 ' source={require('../../../assets/images/bgr.jpeg')}>
    <SafeAreaView className="flex-1 flex-col items-center justify-start ">
      {/* Header */}
        <View style = {{width:'30%', height: '20%'}}>
            <Image className="w-full h-full " resizeMode="contain" source={require('../../../assets/Icons/admin.png')} />
        </View>
      {/* Content */}
      <Text className="text-[35px] text-white font-medium ">ADMIN</Text>
      <View className = 'items-center flex w-5/6 '>
      <TouchableOpacity style = {{width: width*.3, height:height*0.08}} className='mt-10' onPress={handleNavigateToHome}>
      <Image className="w-full h-full" resizeMode="contain" source={require('../../../assets/Icons/logout.png')} />
      </TouchableOpacity>
      </View>
   

      {/* Logout */}
    </SafeAreaView>
    </ImageBackground>
 
    </View>
   )
}