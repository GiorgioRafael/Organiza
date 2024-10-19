import React from 'react'

import FormProduto from '../Components/FormProduto'
import LoginScreen from '../Components/LoginScreen'
import TelaEstoque from '../Components/TelaEstoque'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import FuncionarioLogin from '../Components/FuncionarioLogin'
import EmpresaLogin from '../Components/EmpresaLogin'


const Stack = createStackNavigator();


const Routes = () => {
    const [produtos, setProdutos] = useState([])
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" component={LoginScreen} screenOptions={{headerShown: false}}>
         <Stack.Screen
         name="LoginScreen"
         component={LoginScreen}
         />

          <Stack.Screen
          name="FormProduto"
          component={FormProduto}
          initialParams={{produtos, setProdutos}}
          />

          <Stack.Screen
        name="TelaEstoque"
        component={TelaEstoque}
        initialParams={{produtos}}
        options={{ title: 'Tela de Estoque' }}
        />

        <Stack.Screen
         name="FuncionarioLogin"
         component={FuncionarioLogin}
        />

        <Stack.Screen
         name="EmpresaLogin"
         component={EmpresaLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routes;