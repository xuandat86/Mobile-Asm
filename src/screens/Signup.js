// App list => {}
import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Container, H1, Background, Input, BUTTON,  BtnBackOf } from "../components/style";
import { ScrollView } from "react-native-gesture-handler";
import {Empty, Regex,passLength } from "../validation/form_validation";
const {createAcount} = require("../api/account"); 


export default function Signup({navigation}) {
    const onLogin = () => {
        navigation.navigate("Home");
      };
      
  const [check,setCheck] = useState(true);
  const [hidden,setHideen] = useState(true);
  const [fullName,setFullName] = useState('');
  const [phoneNumber,setUserName] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [reapeatpassword,setReapeatPassword] = useState('');
  const ListIP = [
    setFullName,setUserName,setPhone,setPassword,setReapeatPassword
  ]
  const resetAllFields = () => {
    ListIP.forEach(setStateFunction => setStateFunction(''));
  };
  const account = {
    fullname: fullName,
    Phone_user: phone,
    Username_user: phoneNumber,
    Password_user: password,
    hierarchy: "User"
  };

  const Create = async () => {
   return await createAcount(account);
  }
  const onBack = () => {
    navigation.goBack();
  };

  const element = [
    {value: fullName, validation: [{
     validate: Empty,
     errorMessage: "Không được để trống full name"
    }]},
    {value: phone, validation: [{
      validate: Empty,
      errorMessage: "Không được để trống sđt"
     }]},
    {value: phoneNumber, validation: [{
      validate: Empty,
      errorMessage: "Không được để trống UserName"
     }]},
     {error:"password",value: password, validation: [
     {
       validate: Empty,
       errorMessage: "Không được để trống password"
      },
      {
       validate: passLength,
       errorMessage: "Password từ 8 kí tự trở lên"
      }
      ]},
      {error:"password",value: reapeatpassword, validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống password"
         },
         {
          validate: passLength,
          errorMessage: "Password từ 8 kí tự trở lên"
         }
         ]},
      
   ]
   const validate = async () => {
     const error = [];
     for (const item of element) {
       for (const validate of item.validation) {
         if(!validate.validate(item.value)){
           error.push(validate.errorMessage);
         }
       }
     }
    if(error.length > 0){
       const notificalArror = error.join('\n');    
     return  Alert.alert("Notification", notificalArror )
    }
    const newUser = await Create();
    if(newUser)resetAllFields();
     
   }  

  return (
    <View className={"flex-1"}>
      <Background url={require("../../assets/images/bg_1.png")}>
        <SafeAreaView className="flex-1">
          <View className="flex-1 items-center">
            <H1 title heavy className="pb-[3vh] mt-[5vh]">
               REGISTER
            </H1>
            <View
              className={
                "bg-white w-full h-[100%] rounded-tl-[40vw] items-center justify-start shadow-2xl"
              }
              style={{}}
            >
              <Text
                className="text-[35px] font-bold text-primary_sky 
            mt-[6vh] 
            "
              >
               CREATE ACCOUNT
              </Text>
              <Text className="my-[5px] text-[#335] font-bold">
              Account information
              </Text>
              <Container className="mt-[20px] flex-1 ">
                <ScrollView className="h-[80%] flex-[0.7]">
                <Input
                  title={"Full Name"}
                  placeholder={"Nguyen Van A"}
                  onChangeText={setFullName}
                  changeText={fullName}
                ></Input>
              {/* Phone numbwe  */}
              <Input
                  title={"Phone Number"}
                  placeholder={"03777xxxx"}
                  onChangeText={setPhone}
                  changeText={phone}
                ></Input>
              {/* User Name */}
                <Input
                  title={"User Name"}
                  placeholder={"....@fpt.edu.vn"}
                  onChangeText={setUserName}
                  changeText={phoneNumber}
                ></Input>
                {/* Pass word */}
                <Input title={"Password"} placeholder={"Password"} isCheck = {hidden}  onChangeText={setPassword} 
                changeText={password}
                 >
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }}
                 onPress={() => setHideen(!hidden)} 
                 />
                </Input>
                {/* Reapeat pass word */}
                <Input title={"Enter the password"} placeholder={"************"} isCheck = {hidden} onChangeText={setReapeatPassword} 
                changeText={reapeatpassword}
                 >
                <Icon name="eye" size={30} className={"absolute top-0 right-0 "} style={{position:'absolute', right: 20,  top:'45%' }}
                 onPress={() => setHideen(!hidden)} 
                 />
                </Input>
                </ScrollView>
                         {/* LOGIN */} 
             <View className = {" flex-[0.15]"}>
                <BUTTON onPresss={validate}>
                 <Text className= 'text-center leading-[50px] text-white font-bold' > 
                  New Account
                 </Text>
                 </BUTTON>
                 <H1 small  className="text-primary_black flex text-center mt-4">
                  Already have an account ? 
                  <H1 small heavy className="text-primary_sky" onPress={onLogin}>
                      Login
                  </H1>
                 </H1>
                </View>
              </Container>
            </View>
          </View>
        </SafeAreaView>
        <BtnBackOf onPress={onBack}/>
      </Background>
    </View>
  );
}

