import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import HomeScreen from './src/pages/HomeScreen';
import AreaScreen from './src/pages/AreaScreen';
import CombustivelScreen from './src/pages/CombustivelScreen';
import EditorScreen from './src/pages/EditorScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: '#e1ecd6',
          tabBarActiveBackgroundColor: '#49cccc',
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#7cd7cf',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
           options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Area" 
          component={AreaScreen} 
           options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Combustivel" 
          component={CombustivelScreen} 
           options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Editor" 
          component={EditorScreen} 
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
