import 'react-native-gesture-handler';
import React, { useState } from 'react';
import TelaEstoque from './Components/TelaEstoque';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


//Componente principal da tela de login
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Submit pressed', { email, password });
    // Add your login logic here
  };

  const handleEmployeePress = () => {
    console.log('Sou Funcionario pressed');
    // Add navigation or logic for employee flow
  };

  const handleCompanyPress = () => {
    console.log('Tenho uma empresa pressed');
    // Add navigation or logic for company flow
  };

  const title = '{Organiza}';
  return (
    <View style={styles.container}>
<Text style={styles.title}>{title}</Text>
      <Text style={styles.formInput}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text
      style={styles.formInput}>
        Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
      style={styles.submitButton} 
      onPress={() => navigation.navigate('TelaEstoque')}>
        <Text style={styles.submitButtonText}>Entrar</Text>
      </TouchableOpacity>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.optionButton} onPress={handleEmployeePress}>
          <Text style={styles.optionButtonText}>Sou Funcionario</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton} onPress={handleCompanyPress}>
          <Text style={styles.optionButtonText}>Tenho uma empresa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const Stack = createStackNavigator();

//Componente principal de navegação!
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
         <Stack.Screen name=" " component={LoginScreen}/>
        <Stack.Screen name="TelaEstoque" component={TelaEstoque} options={{ title: 'Tela de Estoque' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const appi = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
         <Stack.Screen name=" " component={LoginScreen}/>
        <Stack.Screen name="TelaEstoque" component={TelaEstoque} options={{ title: 'Tela de Estoque' }}/>
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
  }
});