// App list => {}
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, H1, Background, Input, BUTTON,  } from "../components/style";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function Picture({navigation}) {
  const [check,setCheck] = useState(true);
  const [hidden,setHideen] = useState(true);
  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
  const onSigin = () => {
    navigation.navigate("Signup");
  };
  const onForgot = () => {
    navigation.navigate("ForgotPass");
  };

  return (
    <View className={"flex-1"}>
      <Background url={require("../../assets/images/bg_1.png")}>
        <SafeAreaView className="flex-1">
          <View className="flex-1 items-center">
            <H1 title heavy className="pb-[3vh] mt-[5vh]">
              LOGIN
            </H1>
            <View
              className={
                "bg-white w-full h-[100%] rounded-tl-[40vw] items-center justify-start shadow-2xl"
              }
              style={{}}
            >
              <Text
                className="text-[35px] font-bold text-primary_sky 
            mt-[6vh] 
            "
              >
                Welcome Back
              </Text>
              <Text className="my-[5px] text-[#335] font-bold">
                Login to your account
              </Text>
              <Container className="mt-[20px]">
                <Input
                  title={"User Name"}
                  placeholder={"....@fpt.edu.vn"}
                  onChangeText={setName}
                ></Input>
                {/* Pass word */}
                <Input title={"Password"} placeholder={"Password"} isCheck = {hidden} 
                onChangeText={setPass}
                 >
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }}
                 onPress={() => setHideen(!hidden)} 
                 />
                </Input>
                <View className = "flex-row items-center justify-between mt-5">
                <View className="justify-start items-center flex-row mt-[10px]">
                  <Pressable className = "w-5 h-5 border-2 rounded-[50vw] " style={  check?{backgroundColor: 'white' }:{backgroundColor: 'blue' }}   onPress={() => {
                       setCheck(!check)
                  }} /> 
                 <H1 small v_small className = "text-primary_black mx-[20px]">Remember me</H1>
                </View>
                <H1 small bold className = "text-primary_sky mx-[20px] "   onPress={onForgot}>Forgot Password ? </H1>
                </View>
                {/* GOOGLE & FACEBOOK */}
               <View className="flex-row items-center justify-center mt-5">
               <View className="w-[40%] border-b">
                </View>
                <Text className="px-3 font-bold">OR</Text>
                <View className="w-[40%] border-b">
                </View>
               </View>
               <View className="flex items-center flex-row justify-evenly mt-7 ">
                <Image 
                className = {'w-[40px] h-[40px]'}
                source={require('../../assets/images/icon_fb.png')} />
                        <Image 
                className = {'w-[40px] h-[40px] object-contain'}
                source={require('../../assets/images/icon_gmail.png')} />
                        <Image 
                className = {'w-[40px] h-[40px]'}
                source={require('../../assets/images/icon_inta.png')} />
               </View>
                {/* LOGIN */}
                <View className = {"mt-10"}>
                <BUTTON onPresss={() => {
                  (name.trim() == 'User' &&  pass.trim() == '12345678') ? navigation.navigate('User'):alert('ERROR')
                }}> 
                 <Text className= 'text-center leading-[50px] text-white font-bold' > 
                  LOGIN
                 </Text>
                 </BUTTON>
                 <H1 small  className="text-primary_black flex text-center mt-4">
                  Don't have an acount ? 
                  <H1 small heavy className="text-primary_sky"
                  onPress={onSigin}
                  >
                      Signup
                  </H1>
                 </H1>
                </View>
              </Container>
            </View>
          </View>
        </SafeAreaView>
      </Background>
    </View>
  );
}

