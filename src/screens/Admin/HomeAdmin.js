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
import { CreateDate, H1 } from "../../components/style";
import Icon from "react-native-vector-icons/FontAwesome";


export default function HomeAdmin({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const data = [
    {
      img: require('../../../assets/Icons/management_user.png'),
      title: 'Quản Lý User',
      onPress: () =>   {
        navigation.navigate('manageUser');
      }
    },
    {
      img: require('../../../assets/Icons/add.png'),
      title: 'Tạo Đơn Mới ',
      onPress: () =>   {
        navigation.navigate('add');
      }
      
    },
    
    {
      img: require('../../../assets/Icons/manegebook_.png'),
      title: 'Quản Lý Sách ',
      onPress: () =>   {
        navigation.navigate('ManegeBooks');
      }
    },
    {
      img: require('../../../assets/Icons/listBooks.png'),
      title: ' Danh sách sách  ',
      onPress: () =>   {
        navigation.navigate('ListBooks');
      }
    },
    {
      img: require('../../../assets/Icons/analytics.png'),
      title: 'Quản lý đơn ',
      onPress: () =>   {
        navigation.navigate('ManegeOrder');
      }
    },
    {
      img: require('../../../assets/Icons/out-of-stock.png'),
      title: 'Danh sách quá hạn',
      onPress: () =>   {
        navigation.navigate('UpdateNow');
      }
    }
  ]
  return (
   <CreateDate data={data} />
  );
}


