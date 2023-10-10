
import { createStackNavigator } from '@react-navigation/stack';
import ManegeBooks from '../screens/Admin/ManegeBooks';
import CreateBooks from '../screens/Admin/Books/CreateBoooks';
import SearchingBooks from '../screens/Admin/Books/SearchingBooks';


const Stack = createStackNavigator();

export default function ManageBooks() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ManegeBooks" component={ManegeBooks} options={{
                title: 'PAGE ADMIN'
            }} />
            <Stack.Screen name="ctBoook" component={CreateBooks} />
            <Stack.Screen name="Stb" component={SearchingBooks} options={{
                title: 'Searching Book'
            }} />
        </Stack.Navigator>
    )
}