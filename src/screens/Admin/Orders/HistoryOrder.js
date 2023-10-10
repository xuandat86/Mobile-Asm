import React from "react";
import { View, Text, Pressable, FlatList, Dimensions } from "react-native";
import { Header,H1,BUTTON, BtnBackOf, } from "../../../components/style";
import DetailBooks from "../../../components/DetailBooks";
import { SafeAreaView } from "react-native-safe-area-context";

export function HistoryOrder({navigation,route}) {
    const item = route.params; 
    const {width,height} = Dimensions.get('window');
    
    return (
        <View className='flex-1'>
          <SafeAreaView className = 'flex-1 items-center justify-start bg-primary_sky'>
            <BUTTON style1={{width:width*0.8,backgroundColor: 'green' }} >
                <Text className = 'text-white font-bold leading-[50px] text-[22px] text-center'>Chi tiết đơn</Text>
            </BUTTON>
            <View style = {{width: width*0.9, height: height*0.75, marginHorizontal:'auto'}}>
            {/* <DetailBooks url = {item.de.url} title = {item.title} /> */}
            <FlatList  data={item.deail} 
             renderItem={({item}) => <DetailBooks url = {item.url} title = {item.title} count = {item.count} date = {item.date}
                status = {item.status}
             />}
            />
            </View>

             {/*  */}

          </SafeAreaView>
          <BtnBackOf onPress={() =>  navigation.goBack()} />
        </View>
    )
}