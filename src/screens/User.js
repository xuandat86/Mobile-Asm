// App list => {}
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, H1, Background, Input, BUTTON, Slider, BtnBackRight, BtnBackOf } from "../components/style";
import { Color } from "../../assets/colors/Colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import DetailBooks from "../components/DetailBooks";
import { DataOrder } from "../data/data";
import { useNavigation } from "@react-navigation/native";



export default function User() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const ItemUser = (props) => (
    <Pressable className="bg-white shadow-metal p-4 rounded-xl flex-row my-2 " style={{
      elevation: 4,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
    }}
    onPress={() => navigation.navigate('HistoryOrder',props.item)}
    >
      <Text className="font-bold text-[20px] w-3/6">Mã Đơn: <Text className="font-medium text-midnight">{props.id}</Text></Text>
      <View className='flex-row justify-around w-3/6'>
        <Icon name="search" size={25} />
        <Icon name="edit" size={25} color={'green'} />
        <Icon name="trash" size={25} color={'red'} />
      </View>
    </Pressable>
  )
  return (
    <View className={"flex-1"}>
      <View
        className={
          "w-full h-[25%] bg-white box-border rounded-bl-[23vw] rounded-br-[23vw] "
        }
      >
        <View className="w-[60vw] h-[20vh] object-contain relative ">
          <Image
            className="w-full h-full"
            source={require("../../assets/images/bgr_left.png")}
          />
          <Image
            source={require("../../assets/images/user.png")}
            className="absolute top-10 right-10"
          />
        </View>
        <H1
          large
          heavy
          className="text-primary_sky ml-40px] absolute bottom-5 left-[70px]"
        >
          Nguyễn Văn Dũng
        </H1>
      </View>
      {/* Danh sách phiếu mượn  */}
      <View style={{ width: width * 0.9 }} className="mx-auto mt-6 ">
        <BUTTON style1={{width: width*0.8}}>
          <Text className="text-white text-center leading-[50px] font-bold">
            Danh sách phiếu mượn
          </Text>
        </BUTTON>
        {/* ListView */}
         <FlatList 
          data={DataOrder}
          renderItem={({item}) => (<ItemUser id = {item.id} item = {item}/>) }
         />
        {/* ListView */}
      </View>

      <BtnBackRight isClass={{ position: 'absolute', right: 20, top: '5%' }} />

      <BtnBackOf />
    </View>

  );
}



{/* <Slider title={'Kinh Doanh'} content={'Nghĩ Giàu Làm Giàu Napoleon Hill'} img={require("../../assets/images/imgBooks/image1.png")}/> */ }