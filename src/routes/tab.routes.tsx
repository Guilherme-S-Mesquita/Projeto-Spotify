import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'



import HomeScreen from '../screens/homeScreen'
import New from '../screens/New'
import PrimaryLogin from '../screens/primaryLogin'
import LoginScreen from '../screens/loginScreen'


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen  
        name='Home' 
        component={HomeScreen}
        options={{headerShown:false}} 
      />
      <Tab.Screen 
        name='New' 
        component={New} 
        options={{headerShown:false}} 
      />
      <Tab.Screen 
        name='LoginScreen' 
        component={LoginScreen}
        options={{headerShown:false}} 
      />
      <Tab.Screen 
        name='PrimaryLogin'
        component={PrimaryLogin} 
        options={{headerShown:false}} 
      />
    </Tab.Navigator>
  );
}

