import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, Dimensions, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomerDrawer = (props) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View className="flex-1">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }} 
      >
        <View className="bg-metal py-10 px-[4vw]">
          <Image source={require('../../assets/images/user.png')} style = {{width: width*0.2,height: width*0.2}} />
          <View>
            <Text className="font-medium text-white my-2 " style={{ fontSize: width * 0.045 }}>Nguyễn Văn Dũng</Text>
            <View className="flex-row items-center pb-2 ">
              <Icon name="phone" size={width * 0.045} color={'gold'} />
              <Text className="text-white font-medium mx-4 " style={{ fontSize: width * 0.04 }}>0377723422</Text>
            </View>
            <View className="flex-row items-center ">
              <Icon name="envelope" size={width * 0.045} color={'gold'} />
              <Text className="text-white font-medium mx-4 " style={{ fontSize: width * 0.04 }}>handmadee@gmail.com</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <View className="w-full h-[0.8] bg-primary_black m-auto">
         <View className='w-full h-10 flex-row px-4 mt-4'>
         <Icon name="sign-out" size={width * 0.045} color={'red'} />
        <Text className ="font-bold text-metal ml-7">Log Out</Text>
         </View>

        </View>
      </DrawerContentScrollView>
      <View className="bg-metal py-5 px-[4vw]">
         <Text className="text-center text-white font-bold text-[18px]"> 
         Contact us : 0377723422 
         </Text>
        </View>
    </View>
  )
}

export default CustomerDrawer;
