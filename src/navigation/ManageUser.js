import { createStackNavigator } from '@react-navigation/stack';
import CreateUser from '../screens/Admin/User/CreateUser';
import ManageUser from '../screens/Admin/ManageUser'
import ListUser from '../screens/Admin/User/ListUser';
import SearchingUser from '../screens/Admin/User/SearchUser';


const Stack = createStackNavigator();


export default function ManageUser1() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ManageUser" component={ManageUser} options={{
                title: 'CREATE ORDER'
            }} />
            <Stack.Screen name="CreateUser" component={CreateUser} options={{
                title: 'CREATE ORDER'
            }} />
             <Stack.Screen name="ListUser" component={ListUser} options={{
                title: 'CREATE ORDER'
            }} />
             <Stack.Screen name="SearchingUser" component={SearchingUser} options={{
                title: 'CREATE ORDER'
            }} />



        </Stack.Navigator>
    )
}