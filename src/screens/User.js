// App list => {}
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
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, H1, Background, Input, BUTTON , Slider} from "../components/style";
import { Color } from "../../assets/colors/Colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";


export default function User({ navigation }) {
  const onLogin = () => {
    navigation.navigate("Picture");
  };
  const OnTop = useRef(new Animated.Value(0)).current;
  const onRotate = useRef(new Animated.Value(0)).current;
  const [check, setCheck] = useState(true);
  const [hidden, setHideen] = useState(true);
  const [notCurrent, setCurrent] = useState(0);
  const { width, height } = Dimensions.get("window");
  const ItemSeparator = () => {
    return <View style={{ height: 10 }} />; // Đặt 
  };
  const booksDT =[1,1,1];
  const SlideRef = useRef(null);
  const [index1, setIndex] = useState('');
  
 


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
      {/* Carousel list view  */}
     <View className=" w-full h-[30%] flex-col items-center justify-start">
     <FlatList
     horizontal
     showsHorizontalScrollIndicator  = {false}
     alwaysBounceHorizontal = {false}
      className = {'flex-1 w-[90%] m-auto '}
       data={booksDT} 
       ref = {SlideRef}
       ItemSeparatorComponent={()=> {
        return(
          <View className = "w-[20px]" />
        )
       }}
      renderItem={() => {
        return (
         <View>
           <Slider title={'Kinh Doanh'} content={'Nghĩ Giàu Làm Giàu Napoleon Hill'} img={require("../../assets/images/imgBooks/image1.png")}/>

         
         </View>
        )
       
      }}
      keyExtractor={(item) => item}
      onScroll={(e) => {
        let tranlate = e.nativeEvent.contentOffset.x;
        let index  = ( (tranlate/width).toFixed(0));
        setIndex(index);
      }}
        >
        </FlatList>
        <View className = 'items-center justify-center flex-row '> 
             {
              booksDT.map((item,index) => {
                return(
                  <View className = " mx-3"
                  style = {{
                   backgroundColor:index == index1 ? 'blue' : 'gray',
                   width: index == index1 ? 25  :10 ,
                   height: 10,
                   borderRadius: 10
                   }}
                  >
                  </View>
                )
              })
             }
           </View>
     </View>
     {/* <BUTTON onPresss={() => {
        setIndex(() => {
          let newIndex = index1 < booksDT? parseInt(index1 + 1) : parseInt(0);
          SlideRef.current.scrollToIndex({
           animated: true,
            index: parseInt(newIndex)
    });
    return newIndex;
        })
}}>

</BUTTON> */}

       
    </View>
    
  );
}



{/* <Slider title={'Kinh Doanh'} content={'Nghĩ Giàu Làm Giàu Napoleon Hill'} img={require("../../assets/images/imgBooks/image1.png")}/> */}