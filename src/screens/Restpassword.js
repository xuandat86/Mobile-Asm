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
import { Container, H1, Background, Input, BUTTON, BtnBackOf } from "../components/style";
import { Color } from "../../assets/colors/Colors";


export default function Restpassword({ navigation }) {
  const [check, setCheck] = useState(true);
  const [hidden, setHideen] = useState(true);
   const onSignup = () => {
    navigation.navigate("Home");
  };
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View className={"flex-1"}>
      <Background url={require("../../assets/images/bg_1.png")}>
        <SafeAreaView className="flex-1">
          <LottieView
            className={
              "w-[100%]  items-center justify-center mt-[3vh] mx-auto object-cover"

            }
            resizeMode="contain"
            source={require("../../assets/animations/newPass.json")}
            autoPlay={true}
            loop
          />
          <View className={"w-[85%] h-[55%] mx-auto"}>
            <H1
              title
              className={" w-[100%]  text-center m-auto mt-10 font-[500]"}
            >
              New Pass
            </H1>
            {/* PassPost */}
            <Input  placeholder={"New Password"} isCheck={hidden}>
              <Icon
                name="eye"
                size={30}
                className={"absolute top-0 right-0 "}
                style={{ position: "absolute", right: 20, top: "45%" }}
                onPress={() => setHideen(!hidden)}
              />
            </Input>
            {/* NewPass */}
            <Input  placeholder={"New Pass"} isCheck={hidden} className="mb-5">
              <Icon
                name="eye"
                size={30}
                className={"absolute top-0 right-0 "}
                style={{ position: "absolute", right: 20, top: "45%" }}
                onPress={() => setHideen(!hidden)}
              />
            </Input>
            {/* Send */}
            <BUTTON onPresss={onSignup}>
              <Text
                className={
                  "text-white font-bold  text-center leading-[50px] text-[20px] "
                }
              >
                Set Pass
              </Text>
            </BUTTON>
          </View>
        </SafeAreaView>
        <BtnBackOf onPress={onBack}/>
      </Background> 
    </View>
  );
}
