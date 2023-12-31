
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";
import LottieView from "lottie-react-native";
import {  H1, Background, Input, BUTTON ,BtnBackOf} from "../components/style";
import { useState } from "react";
export default function ForgotPass({navigation}) {
  const [check,setCheck] = useState(true);
  const [hidden,setHideen] = useState(true);

  const onSignup = () => {
    navigation.navigate("Restpassword");
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View className={"flex-1"}>
      <Background url={require("../../assets/images/bg_1.png")}>
        <SafeAreaView className="flex-1">
        <LottieView
        className={'w-[300px] h-[350px] items-center justify-center mt-[3vh] mx-auto'}
        resizeMode="contain"
        source={require('../../assets/animations/forgot.json')}
        autoPlay={true}
         loop
    />
    <View className={"w-[85%] mx-auto"}>
    <H1 title className={' w-[100%]  text-center m-auto mt-10 font-[500]'} >Forgot Your Password ?</H1>
   <Input placeholder={'Type your email'}/>
   <BUTTON onPresss={onSignup} ><Text className={'text-white font-bold  text-center leading-[50px] text-[20px]'}>Send</Text></BUTTON>
    </View>              
        </SafeAreaView>
      </Background>
      <BtnBackOf onPress={onBack}/>
    </View>
    
  );
}

