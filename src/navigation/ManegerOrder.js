import { createStackNavigator } from '@react-navigation/stack';
import ManegeOrder from '../screens/Admin/ManageOrder';
import SearchingOrder from '../screens/Admin/Orders/SearchingOrder';


const Stack = createStackNavigator();

export default function ManegeOrder1() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ManegeBooks" component={ManegeOrder} options={{
                title: 'PAGE ADMIN'
            }} />
              <Stack.Screen name="SearchingOrder" component={SearchingOrder} options={{
                title: 'PAGE ADMIN'
            }} />
    
    



        </Stack.Navigator>
    )
}