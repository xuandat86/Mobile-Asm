import React, { useEffect, useRef, useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Container,
  H1,
  Background,
  Input,
  BUTTON,
  Slider,
  BtnBackRight,
  Header,
  Books,
  BtnBackOf
} from "../../components/style";
import { FlatList } from "react-native-gesture-handler";
import { DataBoook } from "../../data/data";
const { width, height } = Dimensions.get("window");

export default function CartBoook({route, navigation }) {
  const [pagination, setPagination] = useState([
    {
      title: "Trang chủ",
    },
    {
      title: "Kĩ năng sống ",
    },
    {
      title: "Tiểu thuyết",
    },
    {
      title: "VH-XH",
    },
    {
      title: "Kinh doanh",
    },
    {
      title: "Kinh doanh",
    },

    {
      title: "Kinh doanh",
    },
  ]);
  const booksDT = [1, 1, 1];
  const SlideRef = useRef(null);
  const [index1, setIndex] = useState("");
  const {item} = route.params;
  return (
    <View className="flex-1 relative">
    <ImageBackground source={item.url} className = "object-cover opacity-[.6] absolute top-0 right-0 left-0 " style = {{width: width , height: height/2}} resizeMode="cover" >
    <View className = 'w-full h-full bg-primary_black opacity-[.8]'>

    </View>
    </ImageBackground>
    <View className="bg-primary_books absolute bottom-0 left-0 right-0  shadow-primary_books" style =  {{width: width, height: height * 0.6 , borderTopLeftRadius: 80 , borderTopRightRadius: 80}}>
        <Image   source={item.url} className = {'absolute top-[-35%] left-[50%]  shadow-primary_books'} style = {{ transform: [{translateX: -width/4}],width: width/2, height: height/3}} resizeMode="contain"/>
      <View className = "top-[20%]">
      <H1 large heavy className = "text-primary_black  text-center ]">{item.title}</H1>
      <H1 small heavy className = "text-primary_text  text-center ]">
      {item.author}
      </H1>
      {/*  */}
      <View style = {{width:width*0.85, height:height*0.08,}} className = "border-t-2 border-b-2  border-primary_text my-4 mx-auto flex-row items-center justify-around">
        <View>
        <H1 large heavy className = "text-primary_black  text-center ]">21</H1>
      <H1 small heavy className = "text-primary_text  text-center ]">
      Lượt học
      </H1>
        </View>
        <View>
        <H1 large heavy className = "text-primary_black  text-center ]">15</H1>
      <H1 small heavy className = "text-primary_text  text-center ]">
      Trong kho
      </H1>
        </View>
        <View>
        <H1 large heavy className = "text-primary_black  text-center ]">4</H1>
      <H1 small heavy className = "text-primary_text  text-center ]">
      Đang mượn
      </H1>
        </View>
      </View>
      <View style = {{width:width*0.85, height:height*0.25,borderRadius: 20}} className = "bg-white m-auto  shadow-primary_books">
      <H1 large heavy className = "text-primary_black  text-left ml-[20px] mt-[10px]">Thông tin</H1>
      <H1   className = "text-primary_text w-[90%] mx-auto" style = {{ fontSize: width*0.04}}>
      Watson (1878 – 1958) sáng lập vào năm 1913; được J. Watson là người định nghĩa tâm lý học hành vi là gì: và cũng được chính ông xuất bản với cái tên “Psychology as the Behaviorist Views It” (Tạm dịch: Tâm lý học qua cái nhìn của nhà hành vi học).
      </H1>
       </View>
      </View>
    </View>
    <BtnBackOf onPress={() => navigation.navigate('mainUser')} />
    </View>
    
  );
}
