
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image

} from "react-native";
import { BUTTON, BtnBackOf, H1, Input , ViewHeader} from "../../../components/style";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";


export default function CreateUser({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const [hidden,setHideen] = useState(true);
  
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
      <BUTTON  style1={{width:width*0.7}}> 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]">CREATE USER</Text>
      </BUTTON>
      <ScrollView className="w-[95%] h-[80%] flex-[0.7] mx-auto">
                <Input
                  title={"Full Name"}
                  placeholder={"Nguyen Van A"}
                ></Input>
              {/* Phone numbwe  */}
              <Input
                  title={"Phone Number"}
                  placeholder={"03777xxxx"}
                ></Input>
              {/* User Name */}
                <Input
                  title={"User Name"}
                  placeholder={"....@fpt.edu.vn"}
                ></Input>
                {/* Pass word */}
                <Input title={"Password"} placeholder={"Password"} isCheck = {hidden}  >
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }}
                 onPress={() => setHideen(!hidden)} 
                 />
                </Input>
                {/* Reapeat pass word */}
                <Input title={"Enter the password"} placeholder={"************"} isCheck = {hidden}  >
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }}
                 onPress={() => setHideen(!hidden)} 
                 />
                </Input>
                </ScrollView>
       <BUTTON  style1={{width:width*0.5}}> 
      <Text className = "text-center leading-[50px] text-white font-bold text-[18px]">Thêm</Text>
      </BUTTON>
      </View>
    
      </View>

  );
}


