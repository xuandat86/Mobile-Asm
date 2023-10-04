import React from "react";
import "react-native-gesture-handler";
import { View, Text, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;
import { createDrawerNavigator } from '@react-navigation/drawer';
import Picture from "./Picture";

const Drawer = createDrawerNavigator();
const LOGIN_1 = "LOGIN";
const REGISTER_1 = "REGISTER";


export default function Home() {
  return (

<Drawer.Navigator initialRouteName="Picture" screenOptions={{headerShown: false}}  >
<Drawer.Screen name="Picture" component={Picture} />
</Drawer.Navigator>


  )
}

// export default function Home() {
//   const [page, setPage] = useState(LOGIN_1);
//   const [name,setName] = useState('');
//   const [pass,setPass] = useState('');
//   const [isCheck,setCheck] = useState(true);

{/* <NavigationContainer style={{ flex: 1 }}>
<Drawer.Navigator>
<Drawer.Screen name="Picture" component={Picture} />
</Drawer.Navigator>
</NavigationContainer> */}


//   return (
//     // Chia component 
//     <View className={"flex-1 items-center justify-start"}>
//       {/* Header */}
//        <Header1 page={page} setPage={setPage}/>
//       {/* Login */}
//        {
//         page === LOGIN_1 ? <Login1 setPass={setPass} setName={setName} isCheck={isCheck} setCheck={setCheck} /> : <Resginter />
//        }
//     </View>
//   );
// }

// const Header1 = ({page,setPage}) => {
//   return (
//     <View className={"h-1/4 w-full"} >
//     <View className={"h-[75%] w-full bg-[#4D8D6E] flex-col items-center justify-center"}>
//       <Text className={"text-white font-bold text-[15vw]"} >
//         Wasty .
//       </Text>
//       <Text className={"text-white"}>
//         think for nature
//       </Text>
//     </View>
//     <View className={"h-[25%] flex-row items-center w-[90%] mx-auto justify-between py-[2vw]"}>
//       <TouchableOpacity className={"text-center w-[50%]"} onPress={() => {
//         setPage(LOGIN_1)
//       }} disabled={page === LOGIN_1 ? true : false}>
//         <Text className={"text-center text-green-900 text-[5vw]"}>
//           Sign in
//         </Text>
//         {page === LOGIN_1 ? <View className={"h-0.5 absolute bottom-[-15] bg-green-500 w-full mt-10 "}></View> : null}
//       </TouchableOpacity>

//       <TouchableOpacity className={"text-center w-[50%]"} onPress={() => {
//         setPage(REGISTER_1)
//       }} disabled={page === REGISTER_1 ? true : false}>
//         <Text className={"text-center text-green-900 text-[5vw]"}>
//           Get Started
//         </Text>
//         {page === REGISTER_1 ? <View className={"h-0.5 absolute bottom-[-15] bg-green-500 w-full mt-10  "}></View> : null}
//       </TouchableOpacity>

//     </View>
//     </View>
//   );
// }

// const Login1 = ({setPass,setName,isCheck,setCheck}) => {
//   return (
//     <View className={"h-3/6 w-full py-[20] flex-col items-center  "}> 
//     <View className={"h-full w-[95%] mx-auto  "}>
//        <Text className="text-[40px] font-bold " >Login in your acount .  </Text>
//        <View className="flex flex-row items-center px-[20] my-[3vh]  bg-white rounded-lg ">
//         <View className="w-[10%]">
//         <Icon  name="user" size={30} onChangeText={setName}  />
//         </View>
//         <TextInput  className="w-[80%]  bg-white" />
//        </View>
//        <View className="flex flex-row justify-between items-center px-[20]  bg-white  rounded-lg">
//        <View className="w-[10%]">
//        <Icon  name="key" size={30} />
//         </View>
//         <TextInput  className="w-[80%] bg-white " onChangeText={setPass} secureTextEntry={isCheck} />
//         <View className="w-[10%] ml-[10]">
//         <Icon  name="eye" size={30} onPress={() => setCheck(!isCheck)} />
//         </View>
      
//        </View>
//        <Pressable className={"w-[100] h-[50] bg-fuchsia-500 mx-auto my-[3vh] justify-center rounded-lg  "}>
//             <Text className={"text-center  text-white font-bold" }>Login</Text>
//        </Pressable>
       
//     </View>
//  </View>
//   )
// }

// const Resginter = ({setPass,setName,isCheck,setCheck}) => {
//   return (
//     <View className={"h-3/6 w-full py-[20] flex-col items-center  "}> 
//     <View className={"h-full w-[95%] mx-auto  "}>
//        <Text className="text-[40px] font-bold " >Login in your acount 2.  </Text>
//        <View className="flex flex-row items-center px-[20] my-[3vh]  bg-white rounded-lg ">
//         <View className="w-[10%]">
//         <Icon  name="user" size={30} onChangeText={setName}  />
//         </View>
//         <TextInput  className="w-[80%]  bg-white" />
//        </View>
//        <View className="flex flex-row justify-between items-center px-[20]  bg-white  rounded-lg">
//        <View className="w-[10%]">
//        <Icon  name="key" size={30} />
//         </View>
//         <TextInput  className="w-[80%] bg-white " onChangeText={setPass} secureTextEntry={isCheck} />
//         <View className="w-[10%] ml-[10]">
//         <Icon  name="eye" size={30} onPress={() => setCheck(!isCheck)} />
//         </View>
      
//        </View>
//        <Pressable className={"w-[100] h-[50] bg-fuchsia-500 mx-auto my-[3vh] justify-center rounded-lg  "}>
//             <Text className={"text-center  text-white font-bold" }>Login</Text>
//        </Pressable>
       
//     </View>
//  </View>
//   )
// }

