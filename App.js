import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homme from './Screen/homme'
import OnBoardScreenL from './Screen/homme2';
import Login from './Screen/login';
const Stack= createStackNavigator();
import Register from './Screen/inscri';
import App1 from './Screen/map';
export default function App() {
  return (
 
   /* <NavigationContainer>
      <Stack.Navigator initialRouteName='Homme'>
        <Stack.Screen name='Home' component={Homme} />
        <Stack.Screen name='OnBoardScreenL' component={OnBoardScreenL} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      
      </Stack.Navigator>
    </NavigationContainer>*/
   
    <View style={styles.container}>
       <Register/>

      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
