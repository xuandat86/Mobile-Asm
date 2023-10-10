import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import User from "./User";
import MainUser from "../screens/User/mainUser";
import CartBoook from "./User/cartBooks";
import CustomerDrawer from "../components/CustomerDrawerl";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeAdmin from "./Admin/HomeAdmin";
import { HistoryOrder } from "./Admin/Orders/HistoryOrder";


const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <NavigationContainer independent={true}   c >
      <Drawer.Navigator initialRouteName="mainUser"
       screenOptions={{ headerShown: false, 
       drawerPosition: 'right',
       }}
        backBehavior="history"
       drawerContent={props => <CustomerDrawer {...props} />}
       >
        <Drawer.Screen name="mainUser" component={MainUser} 
            options={
        
              {
            drawerIcon: () => (
              <Icon name="home" size={18} color = "black" />
            ),
            title : 'Trang Chủ'
          }
          
         }
        />

        <Drawer.Screen name="home" component={User} 
         options={
          {
            drawerIcon: () => (
              <Icon name="book" size={18} color = "black" />
            ),
            title : 'Lịch sử mượn sách'
          }
         }
        />
       <Drawer.Screen name="HistoryOrder" component={HistoryOrder} 
         options={
          {
        
            title : ''
          }
         }
        />
        <Drawer.Screen name="CartBoook" component={CartBoook}  options={{
          title: ''
        }}/>
        <Drawer.Screen name="Change Key" component={CartBoook} 
          options={
          {
            drawerIcon: () => (
              <Icon name="key" size={18} color = "black" />
            ),
            title: 'Đổi Mật Khẩu'
          }
         }
         />
           <Drawer.Screen name="Setting" component={CartBoook} 
          options={
          {
            drawerIcon: () => (
              <Icon name="cog" size={18} color = "black" />
            ),
            title: 'Cài đặt'
          }
         }
         />
  




      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default Home;
