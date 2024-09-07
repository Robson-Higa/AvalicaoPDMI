import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/pages/HomeScreen';
import AreaScreen from './src/pages/AreaScreen';
import CombustivelScreen from './src/pages/CombustivelScreen';
import EditorScreen from './src/pages/EditorScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Area" 
          component={AreaScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Combustivel" 
          component={CombustivelScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Editor" 
          component={EditorScreen} 
          options={{ headerShown: false }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
