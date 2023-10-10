import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Dimensions,
} from "react-native";
import { BtnBackOf, CreateDate, H1 } from "../../components/style";
export default function ManegeBooks({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const data = [
    {
      img: require('../../../assets/Icons/managerBooks/book.png'),
      title: 'Tạo mới sách',
      onPress: () =>   {
        navigation.navigate('ctBoook');
      }
      
    },
    {
      img: require('../../../assets/Icons/managerBooks/searching.png'),
      title: 'Tìm kiếm sách',
      onPress: () =>   {
        navigation.navigate('Stb');
      }
    }
    
  ]
  return (
   <View className = "flex-1">
   <CreateDate data={data} />
   <BtnBackOf onPress={() => navigation.goBack()} />
   </View>
   
  );
}


