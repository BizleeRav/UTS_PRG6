import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import DetailScreen from "./screens/DetailScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SapiScreen from "./screens/SapiScreen";
import DombaScreen from "./screens/DombaScreen";
import KambingScreen from "./screens/KambingScreen";

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          />

          <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          />
          
          <Stack.Screen
          name="Detail"
          component={DetailScreen}
          />
          <Stack.Screen
          name="Sapi"
          component={SapiScreen}
          />
          <Stack.Screen
          name="Domba"
          component={DombaScreen}
          />
          <Stack.Screen
          name="Kambing"
          component={KambingScreen}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
