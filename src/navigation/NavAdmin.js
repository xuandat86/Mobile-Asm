import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAdmin from '../screens/Admin/HomeAdmin';
import NavHome from './NavHome';
import Icon from "react-native-vector-icons/FontAwesome";
import UpdateNow from '../screens/updateNow';
import ManegeOrder from './ManegerOrder';
import ProfileAdmin from '../screens/Admin/Profile';





const Tab = createBottomTabNavigator();

export default function NavAdmin(navigation){ 
    return(
        <Tab.Navigator screenOptions={
          {
            headerShown: false,
            
          }
        }>
        <Tab.Screen name="Home1" component={NavHome} options={{
            title: ' PAGE ADMIN',
            tabBarIcon: () => (
              <Icon name="home" size={28} color = "black" />
            )
             
        }} />
        <Tab.Screen name="Chats" component={UpdateNow}  
            options={{
            title: 'Chats',
            
            tabBarIcon: () => (
              <Icon name="comments" size={28} color = "black" />
            )
             
        }} 
        />
        <Tab.Screen name="Profile" component={ProfileAdmin} 
        options={{
            title: 'Profile',
            tabBarIcon: () => (
              <Icon name="user" size={28} color = "black" />
            )
        }}  />
        

        
      </Tab.Navigator>
    )
} 