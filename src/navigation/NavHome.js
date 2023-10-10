import { createStackNavigator } from '@react-navigation/stack';
import HomeAdmin from '../screens/Admin/HomeAdmin';
import CreateOrder from '../screens/Admin/Orders/CreateOrder';
import UpdateNow from '../screens/updateNow';
import ManegeOrder1 from './ManegerOrder';
import ManageUser1 from './ManageUser';
import ManageBooks from './ManageBooks';
import ListBooks from '../screens/Admin/Books/ListBooks';



const Stack = createStackNavigator();

export default function NavHome() {
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="Home" component={HomeAdmin} options={{
        title: 'PAGE ADMIN'
      }} />
      <Stack.Screen name="add" component={CreateOrder} options={{
        title: 'CREATE ORDER'
      }} />
         <Stack.Screen name="manageUser" component={ManageUser1} options={{
        title: 'CREATE ORDER'
      }} />
          <Stack.Screen name="ManegeBooks" component={ManageBooks} options={{
        title: 'CREATE ORDER'
      }} />
         <Stack.Screen name="ManegeOrder" component={ManegeOrder1} options={{
        title: 'CREATE ORDER'
      }} />
             <Stack.Screen name="ListBooks" component={ListBooks} options={{
        title: 'CREATE ORDER'
      }} />


          <Stack.Screen name="UpdateNow" component={UpdateNow} options={{
        title: 'CREATE ORDER'
      }} />








    </Stack.Navigator>
    )
}