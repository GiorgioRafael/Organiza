import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { FIREBASE_AUTH } from '../config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const auth = FIREBASE_AUTH;

    const isEmpty = (str) => !str || 0 === str.length;

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validateInputs = () => {
      if (isEmpty(email) || isEmpty(password)) {
        return { valid: false, message: "Preencha todos os campos" };
      }
      if (!isValidEmail(email)) {
        return { valid: false, message: "Digite um email válido" };
      }
      if (password.length < 6) {
        return { valid: false, message: "A senha deve ter no mínimo 6 caracteres" };
      } return { valid: true };
    };


     //Handles dos botões ==================================================
     // SignIn - Função para logar com email e senha
      const signIn = async () => {
        const validation = validateInputs();
        if (!validation.valid) {
          Alert.alert(validation.message);
          return;
         
        }  else if (validation.valid) {
          try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Sucesso', "Login Efetuado com sucesso!", [{
              text: "Continuar",
              onPress: () => navigation.navigate('TelaEstoque') }]); 
          
        }catch (error) {
          console.log(error)
          Alert.alert('Login fracassou: ' + error.message)
        }
      } 
    }
  
//Handles dos botões, simples para redirecionar para a tela correta.
    const handleFuncionario = () => {
      navigation.navigate('FuncionarioLogin'); //ir para tela estoque
    };

    const handleEmpresa = () => {
      navigation.navigate('EmpresaLogin'); //ir para tela estoque
    };

  //Corpo do app ==================================================
    const title = '{Organiza}'
    return (
      <View style={styles.container}>
              <LinearGradient
          colors={['#090979', '#020024']}
          style={styles.background}
          />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.formInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={(text)=> setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.formInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(text)=> setPassword(text)}
          secureTextEntry={true}
        />
        
        <TouchableOpacity 
        style={styles.submitButton} 
        onPress={signIn}>
          <Text style={styles.submitButtonText}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.optionButton} onPress={handleFuncionario}>
            <Text style={styles.optionButtonText}>Sou Funcionario</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionButton} onPress={handleEmpresa}>
            <Text style={styles.optionButtonText}>Tenho uma empresa</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.buttonRowHelp}>
        <TouchableOpacity>
            <Text style={styles.needHelp}>Preciso de ajuda</Text>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Text style={styles.needHelp}>Esqueci a senha</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }


  //Estilos ==================================================
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




  export default LoginScreen;