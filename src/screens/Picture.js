// App list => {}
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { Container, H1, Background, Input } from "../components/style";
import { Color } from "../../assets/colors/Colors";

export default function Picture() {
  const OnTop = useRef(new Animated.Value(0)).current;
  const onRotate = useRef(new Animated.Value(0)).current;
  const [check,setCheck] = useState(true);

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
                ></Input>
                <Input title={"Password"} placeholder={"Password"}>
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }} 
                 />
                </Input>
                <View className="justify-start items-center flex-row mt-[10px]">
                  <Pressable className = "w-5 h-5 border-2 rounded-[50%] " style={check?{backgroundColor: 'white' }:{backgroundColor: 'blue' }}   onPress={() => {
                       setCheck(!check)
                  }} /> 
                 <H1 small v_small className = "text-primary_black mx-[20px]">Remember me</H1>
                 

                </View>
                <TouchableOpacity className='w-[40%] h-[50px] bg-primary_sky rounded-xl m-auto '>
                 <Text className= 'text-center leading-[50px] text-white font-bold' > 
                  LOGIN
                 </Text>
                </TouchableOpacity>
                

              </Container>
            </View>
          </View>
        </SafeAreaView>
      </Background>
    </View>
  );
}

{
  /* <SafeAreaView className = {"flex-1"}>
<Container className = "m-auto mt-10"> 
   <View>
<H1 title heavy className = "my-[15]">
  Hey Welecome back !
</H1>
<H1 small v_small >
 Helllo again you have benn missed !
</H1>
</View>
  </Container> 
</SafeAreaView> */
}
// animation
/*
       Các phương thức Animated 
       timing => Tạo ra các hoạt hình dựa trên thời gian 
       spring => Tạo ra hoạt hình dựa trên kiểu nhảy 
       sequence => Kết hợp với nhiều hoạt hình thnafh 1 chuỗi 
       parallel => Thực hiện nhiều hoạt hình cùng 1 lúc 
       loop => Hoạt hình lặp lại 
        */
// stop và reset để dừng lại và lặp lại hoạt hình
