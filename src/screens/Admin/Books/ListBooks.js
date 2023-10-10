
import React from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image

} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Catergory } from "../../../components/Catergory";
import { DataBoook } from "../../../data/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { BtnBackOf } from "../../../components/style";



export default function ListBooks({ navigation }) {
  const { width, height } = Dimensions.get("window");
  
  return (
   <View className = "flex-1">
     <SafeAreaView className = 'flex-1'>
     <Catergory title = {'Trong thư viện'} />
     </SafeAreaView>
     <BtnBackOf onPress={() => navigation.goBack()} />
   </View>

  );
}


