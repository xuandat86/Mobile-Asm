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
} from "../../components/style";
import { FlatList } from "react-native-gesture-handler";
import { DataBoook } from "../../data/data";
const { width, height } = Dimensions.get("window");

export default function MainUser({ navigation }) {
  const [pagination, setPagination] = useState([
    {
      title: "Trang chủ",
    },
    {
      title: "Kĩ năng sống",
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
  const [index1, setIndex] = useState(0);
  const [tab, setTab] = useState(false);
  useEffect(() => {
    SlideRef.current?.scrollToIndex({ index: index1, animated: true });
  }, [index1]);
  const onScroll = (e) => {
    let tranlate = e.nativeEvent.contentOffset.x;
    let index = (tranlate / width).toFixed(0);
    setIndex(index);
  };

  


  return (
    <SafeAreaView className="flex-1">
    <ScrollView className="flex-1">
      {/* HEADER */}
      <Header width={width} height={height} onPress={() => {
                navigation.openDrawer();
      }} />
      {/* SCROLL  */}
      <View className=" w-full py-[15px] " style={{ height: height * 0.08 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={false}
          ItemSeparatorComponent={() => {
            return <View className="w-[20px]" />;
          }}
          data={pagination}
          renderItem={({ item }) => {
            return (
              <Pressable className="px-3 " style={{borderBottomWidth: tab ? 3 : 0}} onPress={() => setTab(!tab)}>
                <H1 className="text-primary_black" large bold>
                  {item.title}
                </H1>
              </Pressable>
            );
          }}
        />
      </View>
      {/* CATEGORI */}
      <View className="w-full h-[17%] my-2">
      <View
  className=" bg-metal opacity-[0.8] mx-auto rounded-lg items-center flex justify-center "
  style={{ width: '90%',height: '100%'}}
>
   <FlatList
     ref={SlideRef}
horizontal
showsHorizontalScrollIndicator={false}
alwaysBounceHorizontal={false}
className={" w-[90%]   mx-auto "}
data={booksDT}
ItemSeparatorComponent={() => {
  return <View className="w-[20px]" />;
}}
renderItem={() => {
  return (
      <Slider
        title={"Kinh Doanh"}
        content={"Nghĩ Giàu Làm Giàu Napoleon Hill"}
        img={require("../../../assets/images/imgBooks/image1.png")}
      />
  );
}}
keyExtractor={(item) => item}
onScroll={onScroll}
/>
<View className="items-center justify-center flex-row ">
{booksDT.map((item, index) => {
  return (
    <View
      className=" mx-3"
      style={{
        backgroundColor: index == index1 ? "blue" : "gray",
        width: index == index1 ? 25 : 10,
        height: 10,
        borderRadius: 10,
      }}
    ></View>
  );
})}
</View>



    </View>
     </View>

      {/* FARAGMRT  */}
      <View style={{ width: width * 0.9 }} className="mx-auto">
        {/* Top 5 mượn nhiều */}
        <View>
          <H1 large heavy className="text-primary_black">
            Top 5 mượn nhiều
          </H1>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DataBoook}
            renderItem={({ item }) => {
              return (
                <Books
                onPress={() => navigation.navigate('CartBoook', {item})}
                  title={item.title}
                  author={item.author}
                  url={item.url}
                />
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        {/* Tất cả */}
        <View>
          <H1 large heavy className="text-primary_black">
            Tất cả các cuốn sách
          </H1>
          <FlatList
            numColumns={2}
            data={DataBoook}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Books
                onPress={() => navigation.navigate('CartBoook', {item})}
                  title={item.title}
                  author={item.author}
                  url={item.url}

                />
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
    
  );
}

