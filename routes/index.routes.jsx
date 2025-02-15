import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../config';
import FormProduto from '../Components/FormProduto';
import LoginScreen from '../Components/LoginScreen';
import TelaEstoque from '../Components/TelaEstoque';
import FuncionarioLogin from '../Components/FuncionarioLogin';
import EmpresaLogin from '../Components/EmpresaLogin';
import TelaFuncionarios from '../Components/TelaFuncionarios';
import DetalhesProduto from '../Components/DetalhesProduto';
import GerirFuncionario from '../Components/GerirFuncionario';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();



const Routes = () => {
  const [userId, setUserId] = useState(null);
  
  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userId ? "TelaEstoque" : "LoginScreen"}>
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Hide header on LoginScreen
        />
        <Stack.Screen
          name="FormProduto"
          component={FormProduto}
          initialParams={{ userId }}
          options={{ title: 'Novo Produto' }}

        />
        <Stack.Screen
          name="TelaEstoque"
          component={TelaEstoque}
          initialParams={{ userId }}
          options={{ title: 'Estoque' }}
        />
        <Stack.Screen 
          name="FuncionarioLogin" 
          component={FuncionarioLogin} 
          options={{ headerShown: false }} // Hide header on FuncionarioLogin
        />
        <Stack.Screen 
          name="EmpresaLogin" 
          component={EmpresaLogin} 
          options={{ headerShown: false }} // Hide header on EmpresaLogin
        />
        <Stack.Screen 
          name="Detalhes Produto"  
          component={DetalhesProduto} 
          initialParams={{ userId }}
        />
        <Stack.Screen 
          name="TelaFuncionarios" 
          component={TelaFuncionarios} 
          initialParams={{ userId }}
          options={{ title: 'Novo Funcionario' }}

        />
        <Stack.Screen 
          name="GerirFuncionario" 
          component={GerirFuncionario} 
          initialParams={{ userId }}
          options={{ title: 'Gestão de funcionarios' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;