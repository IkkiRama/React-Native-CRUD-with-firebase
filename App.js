import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Tambah, Detail, Ubah, Carousel } from "./src/pages";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carousel">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Carousel"
          component={Carousel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TambahKontak"
          component={Tambah}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailKontak"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UbahKontak"
          component={Ubah}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
