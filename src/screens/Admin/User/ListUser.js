
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image

} from "react-native";
import { BUTTON, BtnBackOf, H1, Input , ViewHeader, DetailUser} from "../../../components/style";
import Icon from "react-native-vector-icons/FontAwesome";
export default function ListUser({ navigation }) {
  const { width, height } = Dimensions.get("window");
    
  return (
   <View className = "flex-1">
   <ViewHeader/>
   <BtnBackOf onPress={() => navigation.goBack()} />
      {/*  */}
      <View className = "mt-5 bg-white mx-auto rounded-2xl" style = {{width: width*0.9 , height: height*0.6 ,
        elevation: 4,
          shadowColor: 'rgba(0, 0, 0, 0.55)',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: .7,
          shadowRadius: 4,
      } }>
      <DetailUser id = {"222"}/>
    
       

    
    
      </View>
   </View>

  );
}


