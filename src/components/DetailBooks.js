
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { H1 } from "./style";
const { width, height } = Dimensions.get("window");


const  DetailBooks = (props) => (
    <View className="flex-row items-center w-full   mx-auto bg-white rounded-2xl my-3"  
    style={{elevation:4,
  shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4, 
    height: height*0.15
    }}>
    <Image className="w-1/3 h-full  "  resizeMode="contain" source={props.url} />
    <View className = "flex-1 justify-around flex-col h-full">
       <H1   className="text-primary_black text-[20px] font-bold" >{props.title}</H1>
       <H1   className="text-primary_black text-[20px] font-medium " >Số Lượng: <Text>{props.count}</Text></H1>
       <H1   className="text-primary_black text-[20px] font-medium " >Ngày mượn: <Text>{props.date}</Text></H1>
       <H1   className="text-primary_black text-[20px] font-medium" >Status: <Text className = "text-midnight ">
       {props.status}
       </Text></H1>
    </View>
     </View>
  )

  export default DetailBooks ;