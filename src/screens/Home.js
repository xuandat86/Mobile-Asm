import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome";
import User from "./User";
import MainUser from "./User/mainUser";
import Picture from "./Picture";
import Signup from "./Signup";
import ForgotPass from "./ForgotPassword";
import Restpassword from "./Restpassword";
import CartBoook from "./User/cartBooks";
const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="mainUser" screenOptions={{ headerShown: false }} backBehavior="history">
        <Drawer.Screen name="User" component={User} />
        <Drawer.Screen name="mainUser" component={MainUser} />
        <Drawer.Screen name="CartBoook" component={CartBoook} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Home;
