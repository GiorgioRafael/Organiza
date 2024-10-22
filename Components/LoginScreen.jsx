import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { FIREBASE_AUTH } from '../config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const auth = FIREBASE_AUTH;

      // logica verificacao de login abaix
      const signIn = async () => {
        try {
          const response = await signInWithEmailAndPassword(auth, email, password);
          console.log(response)
          Alert.alert('Sucesso', "Login Efetuado com sucesso!", [{
            text: "Continuar",
            onPress: () => navigation.navigate('TelaEstoque') }]); 
        } catch (error) {
          console.log(error)
          Alert.alert('Login fracassou: ' + error.message)
        }
      }

      // Funcao de cadastro de usuario
      // const signUp = async () => {
      //   try {
      //     const response = await createUserWithEmailAndPassword(auth, email, password);
      //     console.log(response)
      //     alert('Verifique seu email')
      //   } catch (error) {
      //     console.log(error)
      //     alert('Login fracassou: ' + error.message)
      //   } finally {
      //   }
      // }

      //se o usuario existir na database:
      //navigation.navigate('TelaEstoque');
 
  
  
    const handleFuncionario = () => {
      // logica verificacao de login abaixo


      //se o usuario existir na database:
      navigation.navigate('FuncionarioLogin'); //ir para tela estoque
 
    };
    const handleEmpresa = () => {
      // logica verificacao de login abaixo


      //se o usuario existir na database:
      navigation.navigate('EmpresaLogin'); //ir para tela estoque
 
    };
  
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
          {/* { loading ? (
          <ActivityIndicator size='large' color='#0000ff'/>
          ) : (
          <>
          <Button title="Login" onPress={()=> signIn} />
          <Button title="Criar conta" onPress={()=> signUp} />
          </>
          )} */}
      </View>
    )
  }

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