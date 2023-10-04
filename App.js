import * as React from 'react';
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import Onboarding1 from './src/screens/Obroandring';
import Picture from './src/screens/Picture';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer style={{ flex: 1 }}>
        <Tab.Navigator 
          screenOptions={ 
            {
              headerShown: false,
              tabBarStyle: {
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                backgroundColor: 'green',
                borderRadius: 15,
                flexDirection:"column",
                alignItems: 'center',
                justifyContent: 'center', // Để căn giữa chiều dọc
              },
            }
          }
        >
          <Tab.Screen
            name="Onboarding"
            component={Onboarding1}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => (
                  <Icon name="home" size={40} color={color} />
              ),
            }}
          />
          
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}

          />
           <Tab.Screen
            name="Picture"
            component={Picture}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
        
      </NavigationContainer>
    <StatusBar style='light' />
    </SafeAreaView>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// yarn add --dev tailwindcss@3.3.2 (Fix lỗi CB react native)

/*
Xây dựng Slider => {}
*/


/*
Red component là 1 khái niệm chính thống và nó dùnh để đặc tẩ 1 thành phần component được sử dụng trong ứng dụng và có màu đỏ 

*/