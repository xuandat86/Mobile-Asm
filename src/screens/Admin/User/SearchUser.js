
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,

} from "react-native";
import { BUTTON, BtnBackOf, H1, Input , ViewHeader} from "../../../components/style";
import { ScrollView } from "react-native-gesture-handler";
export default function SearchingUser({ navigation }) {
  const { width, height } = Dimensions.get("window");
  
  return (
   <View className = "flex-1">
   <ViewHeader content={{width:'100%'}}/>
   <BtnBackOf onPress={() => navigation.goBack()} />
      {/*  */}
      <View className = "mt-5 bg-white mx-auto rounded-2xl" style = {{width: width*0.95 , height: height*0.65 ,
        elevation: 4,
          shadowColor: 'rgba(0, 0, 0, 0.55)',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: .7,
          shadowRadius: 4,
      } }>
      <BUTTON  style1={{width:width*0.7}}> 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]">Tìm user</Text>
      </BUTTON>
      <View className="w-5/6 h-4/5 mx-auto">
       <ScrollView className = "w-full h-full">
       <Input title={'Mã ID User'} isStyle={{color: 'black'}}/>
           {/* Thông tin trả về */}
    
           {/* Thông tin trả về */}
       </ScrollView>
       <BUTTON  style1={{width:width*0.5, marginBottom: 5}} > 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]" >Tìm</Text>
      </BUTTON>
      </View>
    
      </View>
   </View>

  );
}




