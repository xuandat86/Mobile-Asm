
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image

} from "react-native";
import { BUTTON, BtnBackOf, H1, Input , ViewHeader} from "../../../components/style";
import ReactNativeDateTimePicker from '@react-native-community/datetimepicker';
import {Empty, Regex,passLength } from "../../../validation/form_validation";
const {createOrder} = require("../../../api/order");
export default function CreateOrder({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const [id,setId] = useState('');
  const [idBoook,setIdBoook] = useState(1);
  const [count,setCount] = useState('');
  const [date, setDate] = useState(new Date())
  const Order = {
    id_user: id,
    id_boooks: idBoook,
    count: count,
    payment: date,
  }
    const element = [
    {
      value: id,
      validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống ID",
        },
      ],
    },
    {
      value: idBoook,
      validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống idBook",
        },
      ],
    },
    {
      value: count,
      validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống Count",
        },
      ],
    },
  ];
  const validate = async () => {
    const error = [];
    for (const item of element) {
      for (const validate of item.validation) {
        if (!validate.validate(item.value)) {
          error.push(validate.errorMessage);
        }
      }
    }
    if (error.length > 0) {
      const notificalArror = error.join("\n");
      return alert(notificalArror);
    }
    console.log(Order.idBoook);
     const newBook = await createOrder(Order);
     if(newBook)alert("Succcess");
     else alert("ID thành viên hoặc Mã Sách không tồn tại");
  };
  return (
   <View className = "flex-1">
   <ViewHeader/>
   <BtnBackOf onPress={() => navigation.goBack()} />
      {/*  */}
      <View className = "mt-5 bg-white mx-auto rounded-2xl" style = {{width: width*0.9 , height: height*0.65 ,
        elevation: 4,
          shadowColor: 'rgba(0, 0, 0, 0.55)',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: .7,
          shadowRadius: 4,
      } }>
      <BUTTON  style1={{width:width*0.7}}> 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]">Thêm Phiếu Mượn</Text>
      </BUTTON>
      <View className="w-5/6 h-4/5 mx-auto">
       <Input title={'Mã Thành Viên'} isStyle={{color: 'black'}} onChangeText={setId} changeText={id}  />
       <Input title={'Mã Sách'} isStyle={{color: 'black'}}  onChangeText={setIdBoook} changeText={idBoook} />
       <Input title={'Số lượng'} isStyle={{color: 'black'}}  onChangeText={setCount} changeText={count}/>
       <View>
      {/* <ReactNativeDateTimePicker
        mode="datetime"
        date={date}
        onChange={(event, newDate) => setDate(newDate)}
      /> */}
      <ReactNativeDateTimePicker
  value={date}
  onChange={(event, newDate) => setDate(newDate)}
/>
    </View>
       <BUTTON  style1={{width:width*0.5}}> 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]" onPress={validate}>Thêm</Text>
      </BUTTON>
      </View>
    
      </View>
   </View>

  );
}


