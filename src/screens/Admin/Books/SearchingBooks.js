
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
  Alert

} from "react-native";
import { BUTTON, BtnBackOf, H1, Input , ViewHeader} from "../../../components/style";
import { ScrollView } from "react-native-gesture-handler";
const {getDetailBooks} = require("../../../api/books");
export default function SearchingBooks({ navigation }) {
  const { width, height } = Dimensions.get("window");

  const [id,setid] = useState('');
  const validate = async () => {
       if(id.trim() == '')alert("Vui lòng nhập ID");
       const item = await getDetailBooks(id);
       Alert.alert("Thông tin sách",`\nTên sách: ${item.title}  \n\n Tác giả: ${item.author} \n\n Giá sách: ${item.price} vnd ` )

  }
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
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]">Tìm sách</Text>
      </BUTTON>
      <View className="w-5/6 h-4/5 mx-auto">
       <ScrollView className = "w-full h-full">
       <Input title={'Mã Sách'} isStyle={{color: 'black'}} onChangeText={setid}/>
           {/* Thông tin trả về */}

           {/* Thông tin trả về */}
       </ScrollView>
       <BUTTON  style1={{width:width*0.5, marginBottom: 5}} > 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]" onPress={validate} >Thêm</Text>
      </BUTTON>
      </View>
    
      </View>
   </View>

  );
}




