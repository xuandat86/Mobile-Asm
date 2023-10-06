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
import { Container, H1, Background, Input, BUTTON,  BtnBackOf } from "../components/style";
import { Color } from "../../assets/colors/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function Signup({navigation}) {
    const onLogin = () => {
        navigation.navigate("Home");
      };
  const [check,setCheck] = useState(true);
  const [hidden,setHideen] = useState(true);
  const onBack = () => {
    navigation.goBack();
  };


  return (
    <View className={"flex-1"}>
      <Background url={require("../../assets/images/bg_1.png")}>
        <SafeAreaView className="flex-1">
          <View className="flex-1 items-center">
            <H1 title heavy className="pb-[3vh] mt-[5vh]">
               REGISTER
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
               CREATE ACCOUNT
              </Text>
              <Text className="my-[5px] text-[#335] font-bold">
              Account information
              </Text>
              <Container className="mt-[20px] flex-1 ju">
                <ScrollView className="h-[80%] flex-[0.7]">
                <Input
                  title={"Full Name"}
                  placeholder={"Nguyen Van A"}
                ></Input>
              {/* Phone numbwe  */}
              <Input
                  title={"Phone Number"}
                  placeholder={"03777xxxx"}
                ></Input>
              {/* User Name */}
                <Input
                  title={"User Name"}
                  placeholder={"....@fpt.edu.vn"}
                ></Input>
                {/* Pass word */}
                <Input title={"Password"} placeholder={"Password"} isCheck = {hidden}  >
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }}
                 onPress={() => setHideen(!hidden)} 
                 />
                </Input>
                {/* Reapeat pass word */}
                <Input title={"Enter the password"} placeholder={"************"} isCheck = {hidden}  >
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }}
                 onPress={() => setHideen(!hidden)} 
                 />
                </Input>
                </ScrollView>
                         {/* LOGIN */} 
             <View className = {" flex-[0.15]"}>
                <BUTTON>
                 <Text className= 'text-center leading-[50px] text-white font-bold' > 
                  New Account
                 </Text>
                 </BUTTON>
                 <H1 small  className="text-primary_black flex text-center mt-4">
                  Already have an account ? 
                  <H1 small heavy className="text-primary_sky
                   
                  " onPress={onLogin}>
                      Login
                  </H1>
                 </H1>
                </View>
              </Container>
            </View>
          </View>
        </SafeAreaView>
        <BtnBackOf onPress={onBack}/>
      </Background>
    </View>
  );
}

