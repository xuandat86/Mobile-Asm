import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Dimensions,
} from "react-native";
import { BtnBackOf, CreateDate, H1 } from "../../components/style";
import Icon from "react-native-vector-icons/FontAwesome";



export default function ManegeOrder({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const data = [
    {
      img: require('../../../assets/Icons/managerBooks/clock.png'),
      title: 'Lịch sử đơn',
      onPress: () =>   {
        navigation.navigate('CreateBooks');
      }
      
    },
    {
      img: require('../../../assets/Icons/managerBooks/order.png'),
      title: 'Tìm kiếm đơn',
      onPress: () =>   {
        navigation.navigate('SearchingOrder');
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


