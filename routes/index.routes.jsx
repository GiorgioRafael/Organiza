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

const Stack = createStackNavigator();

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
      <Stack.Navigator initialRouteName={userId ? "TelaEstoque" : "LoginScreen"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="FormProduto"
          component={FormProduto}
          initialParams={{ userId }}
        />
        <Stack.Screen
          name="TelaEstoque"
          component={TelaEstoque}
          initialParams={{ userId }}
          options={{ title: 'Tela de Estoque' }}
        />
        <Stack.Screen name="FuncionarioLogin" component={FuncionarioLogin} />
        <Stack.Screen name="EmpresaLogin" component={EmpresaLogin} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} initialParams={{ userId }}/>
        <Stack.Screen name="TelaFuncionarios" component={TelaFuncionarios} initialParams={{ userId }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;