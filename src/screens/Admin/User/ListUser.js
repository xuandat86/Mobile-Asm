
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image

} from "react-native";
import { BUTTON, BtnBackOf, H1, Input , ViewHeader, DetailUser} from "../../../components/style";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";

const  {getAcounts,createAcount,getLogin} = require("../../../api/account");

export default  function  ListUser({ navigation }) {
  const [listAcount, setListAcount] = useState([]); // Sử dụng useState để lưu trữ danh sách tài khoản

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accounts = await getAcounts();
        setListAcount(accounts); 
      } catch (error) {
        console.error('Lỗi:', error);
      }
    };
    fetchData(); 
  }, []);

  const { width, height } = Dimensions.get("window");
   
  if (Array.isArray(listAcount) && listAcount.length > 0) {
    const firstUserId = listAcount[0].id;
    console.log("ID của người dùng đầu tiên:", firstUserId);
  } else {
    console.log("Mảng listAcount trống hoặc không có phần tử nào.");
  }
  
// Lệnh trả về for word for extension 
  return (
   <View className = "flex-1">
   <ViewHeader/>
   <BtnBackOf onPress={() => navigation.goBack()} />
      {/*  */}
      <View className = "mt-5 bg-white mx-auto rounded-2xl" style = {{width: width*0.9 , height: height*0.6 ,
        elevation: 4,
          shadowColor: 'rgba(0, 0, 0, 0.55)',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: .7,
          shadowRadius: 4,
      } }>
    
       <FlatList 
        data={listAcount}
        renderItem={({item}) => (
          <DetailUser id = {item.id}/>
        )}
       />    
      </View>
   </View>

  );
}


