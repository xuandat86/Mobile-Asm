
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Alert,

} from "react-native";
import { BUTTON, BtnBackOf, H1, Input , ViewHeader} from "../../../components/style";
import { ScrollView } from "react-native-gesture-handler";
const {getAcount} = require("../../../api/account");
export default function SearchingUser({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const [id,setid] = useState('');
  const validate = async () => {
       if(id.trim() == '') return alert("Vui lòng nhập ID");
       const item = await getAcount(id);
       Alert.alert("Thông User",`\nTên User: ${item.fullname}  \n\n mail: ${item.Phone_user} \n\n Quyền: ${item.hierarchy}  ` )
       setid('');
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
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]">Tìm user</Text>
      </BUTTON>
      <View className="w-5/6 h-4/5 mx-auto">
       <ScrollView className = "w-full h-full">
       <Input title={'Mã ID User'} isStyle={{color: 'black'}} onChangeText={setid} changeText={id}/>
           {/* Thông tin trả về */}
    
           {/* Thông tin trả về */}
       </ScrollView>
       <BUTTON  style1={{width:width*0.5, marginBottom: 5}} onPresss={validate} > 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]" >Tìm</Text>
      </BUTTON>
      </View>
    
      </View>
   </View>

  );
}




