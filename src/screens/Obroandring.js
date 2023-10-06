import React from "react";
import { View, Text, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import {DataOnboarding} from "../data/data";


const { width } = Dimensions.get("window");

const Welcome = ({ url }) => (
  <View style={{ width, height: width, alignItems: "center", justifyContent: "center" }}>
    <LottieView
      style={{ width, height: width }}
      resizeMode="contain"
      source={url}
      autoPlay={true}
      loop
    />
  </View>
);

export default function Onboarding1({ navigation }) {
  const pages = DataOnboarding.map((item) => ({
    backgroundColor: "#60B7FF",
    image: <Welcome url={item.img} />,
    title:<Text className='text-[30px] text-white text-center font-[800] my-[20px]'>{item.title}</Text>,
    subtitle: item.describe,
  }));

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onSkip={() => navigation.navigate("Home")}
        onDone={() => navigation.navigate("Home")}
        pages={pages}
      />
    </View>
  );
}
