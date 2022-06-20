import { StatusBar } from 'expo-status-bar';
import store from "./store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Settings from './components/Settings';
import FreeSound from './components/FreeSound';
import Library from './components/Library';

let persistor = persistStore(store);
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Soundboard">
                <Stack.Screen 
                    name="Soundboard"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#ff9000',
                        },
                        headerTintColor: 'white'
                    }}
                />
                <Stack.Screen 
                    name="FreeSound"
                    component={FreeSound}
                    options={{
                        title: 'Finf in library',
                        headerStyle: {
                            backgroundColor: '#ff9000',
                        },
                        headerTintColor: 'white',
                    }}
                />
                <Stack.Screen 
                    name="Library"
                    component={Library}
                    options={{
                        title: 'Samples library',
                        headerStyle: {
                            backgroundColor: '#ff9000',
                        },
                        headerTintColor: 'white',
                    }}
                />
                <Stack.Screen 
                    name="Settings"
                    component={Settings}
                    options={{
                        title: 'Settings',
                        headerStyle: {
                            backgroundColor: '#ff9000',
                        },
                        headerTintColor: 'white',
                    }}
                />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
          </PersistGate>
      </Provider>
  );
}
