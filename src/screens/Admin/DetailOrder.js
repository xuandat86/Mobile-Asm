
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
import { H1 } from "../../components/style";
const { width, height } = Dimensions.get("window");



export default function DetailOrder({ navigation }) {


  return (
    <View className={"flex-1"}>
    <View className = "w-11/12 h-full mx-auto">
    <View style = {{height: height*0.1 , marginTop: 10}} className = "flex-col justify-around border-b-[1px] ">
    <H1 className= "text-[20px] text-primary_black font-medium">Thông tin khách hàng</H1>
    <H1 className= "text-[15px] text-primary_black">Name:  Phạm Xuân Đạt</H1>
    <H1 className= "text-[15px] text-primary_black">ID: 011196</H1>
    <H1 className= "text-[15px] text-primary_black">Date : 24-10-2003</H1>
    </View>

    <View className="flex-row items-center w-full   mx-auto bg-white rounded-2xl my-10"  
    style={{elevation:4,
  shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4, 
    height: height*0.15
    }}>
    <Image className="w-1/3 h-full  "  resizeMode="contain" source={require('../../../assets/images/imgBooks/image1.png')} />
    <View className = "flex-1 justify-around flex-col h-full">
       <H1   className="text-primary_black text-[20px] font-bold" >Đắc Nhân Tâm</H1>
       <H1   className="text-primary_black text-[20px] font-medium " >Số Lượng: <Text>11</Text></H1>
       <H1   className="text-primary_black text-[20px] font-medium " >Ngày mượn: <Text>22-11-2023</Text></H1>
       <H1   className="text-primary_black text-[20px] font-medium" >Status: <Text className = "text-midnight ">stocking</Text></H1>
    </View>
     </View>
    </View>


    </View>
    
  );
}


