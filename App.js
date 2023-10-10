import * as React from 'react';
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Onboarding1 from './src/screens/Obroandring';
import Picture from './src/screens/Picture';
import Restpassword from './src/screens/Restpassword';
import Signup from './src/screens/Signup';
import ForgotPass from './src/screens/ForgotPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DetailOrder from './src/screens/Admin/DetailOrder';
import NavAdmin from './src/navigation/NavAdmin';
import { HistoryOrder } from './src/screens/Admin/Orders/HistoryOrder';



const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationContainer style={{ flex: 1 }}  >
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
                justifyContent: 'center', 
              },
            }
          }
          initialRouteName='Onboarding'
        >

<Tab.Screen
            name="NavAdmin"
            component={NavAdmin}
            options={{
              headerShown: false,
              headerBackVisible: true,
              

              
            }}
          />
                      <Tab.Screen
            name="DetailOrder"
            component={DetailOrder}
            options={{
              headerShown: true,
              headerBackVisible: true,
              title: 'Chi Tiết Đơn Hàng',
            
              
            }}
          />
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
            component={Picture}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}
            />
             <Tab.Screen
            name="User"
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
            name="ForgotPass"
            component={ForgotPass}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}
          />
             <Tab.Screen
            name="Restpassword"
            component={Restpassword}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}
          />
             <Tab.Screen
            name="Signup"
            component={Signup}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}

          /> 
          {/* ADMIN */}
          <Tab.Screen
            name="HomeAdmin"
            component={NavAdmin}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}
          /> 
         {/* History Order */}
         <Tab.Screen
            name="HistoryOrder"
            component={HistoryOrder}
            options={{
              tabBarIcon: ({ color }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="home" size={30} color={color} />
                </View>
              ),
            }}
          /> 
        </Tab.Navigator>
        <StatusBar style='light' />
      </NavigationContainer>
      </GestureHandlerRootView>

  );
}



