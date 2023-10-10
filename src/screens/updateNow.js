import react  from "react";
import { View, ImageBackground,Text, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { BtnBackOf } from "../components/style";
const {width,height} = Dimensions.get('window')


export default function UpdateNow({navigation}) {
  return (
    <View className = "flex-1 items-center justify-center "  >
    <LottieView
        style={{ width: width, height: height*0.5 }}
        resizeMode="contain"
        source={require('../../assets/animations/updateApp.json')}
        autoPlay={true}
        loop
      />
      <View className = "flex-col items-center justify-around" style = {{height: height*0.12}}>
      <Text className = 'font-bold text-[23px]'>Hệ thống đang được bảo trì </Text>
      <Text  className = 'font-bold text-[22px] ' style = {{color:'green'}} > Updating 35% </Text>
      <Text  className = 'font-bold text-[22px] '  style = {{color:'green'}} > Ngày dự kiến 24 - 10 -2003  </Text>
      </View>
      <BtnBackOf onPress={() => navigation.goBack()} />
    </View>
  )
}