import 'react-native-gesture-handler';
import React, { useState } from 'react';
import TelaEstoque from './Components/TelaEstoque';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import FormProduto from './Components/FormProduto';
import LoginScreen from './Components/LoginScreen';


//Componente principal da tela de login


const Stack = createStackNavigator();

//Componente principal de navegação!
const App = () => {
  const [produtos, setProdutos] = useState([]);
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="LoginScreen" component={LoginScreen} screenOptions={{headerShown: false}}>
         <Stack.Screen
         name="LoginScreen"
         component={LoginScreen}/>
         <Stack.Screen
          name="FormProduto"
          component={FormProduto}
          initialParams={{produtos, setProdutos}}/>
        <Stack.Screen
        name="TelaEstoque"
        component={TelaEstoque}
        initialParams={{produtos}}
        options={{ title: 'Tela de Estoque' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage : 'linear-gradient(45deg, #3c1779, #0073c5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonRowHelp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  optionButtonText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  formInput: {
    textAlign: 'left',
    width: '99.5%',
    marginBottom: 5,
    fontWeight: '400',
    color: '#fff',
  },
  titleminusculo: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '110%',
  },
  needHelp: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 20,
  }
});