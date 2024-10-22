import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { createEmpresaInfo } from './FireBaseAdd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config';


const EmpresaLogin = ({ navigation }) => {
  //use state das variaveis utilizadas
    const auth = FIREBASE_AUTH;

    const [empresaNome, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [buttonNext, setButtonNext] = useState('Continuar')
    const [loading, setLoading] = useState(false);

    const isEmpty = (str) => !str || 0 === str.length;

      const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const validateInputs = () => {
      if (isEmpty(empresaNome) || isEmpty(email) || isEmpty(nome) || isEmpty(password) || isEmpty(passwordVerify)) {
        return { valid: false, message: "Preencha todos os campos" };
      }
      if (!isValidEmail(email)) {
        return { valid: false, message: "Digite um email válido" };
      }
      if (password.length < 6) {
        return { valid: false, message: "A senha deve ter no mínimo 6 caracteres" };
      }
      if (password !== passwordVerify) {
        return { valid: false, message: "As senhas devem ser iguais" };
      }
      return { valid: true };
    };


    const handleContinuar = async () => {
      // logica verificacao de login abaixo
      setButtonNext('Carregando...')
      const validation = validateInputs();
    if (!validation.valid) {
      Alert.alert(validation.message);
      setButtonNext('Continuar')
      return;
      //verifica se todos os campos estão preenchidos
    } else if(validation.valid){
      const empresaInfo = {
      empresaNome: empresaNome,
      empresaEmail: email,
      empresaGestor: nome,
      empresaSenha: password,
    }
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      createEmpresaInfo(empresaInfo, navigation)  
      //console.log(response)
      console.log('cadastrado com sucesso')

    } catch (error) {
      Alert.alert('Erro ao cadastrar a empresa: '+ error);
      console.log(error)
      setButtonNext('Continuar')
    }
  }
    //adicao dos dados na database

    };
  
    const handleTelaInicial = () => {
      navigation.navigate('LoginScreen');
    };
  
    const handleFuncionario = () => {
      navigation.navigate('LoginScreen')
      // logica para criacao de conta/empresa
    };
    const title = '{Organiza}';
    return (
      <View style={styles.container}>
              <LinearGradient
          colors={['#090979', '#020024']}
          style={styles.background}
          />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title2}>Registro de empresa</Text>
        
        <Text style={styles.formInput}>Nome da empresa</Text>
        <TextInput
          value={empresaNome}
          style={styles.input}
          placeholder="Digite o nome da empresa"
          onChangeText={(text)=> setEmpresa(text)}
        />
        <Text
        style={styles.formInput}>
          Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={(email)=> setEmail(email)}
        />

        <Text style={styles.formInput}>Nome</Text>
        <TextInput
          value={nome}
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(nome)=> setNome(nome)}
        />
        <Text style={styles.formInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(password)=> setPassword(password)}
          secureTextEntry
        />
        <Text style={styles.formInput}>Repita sua senha</Text>
        <TextInput style={styles.input}
          placeholder="Digite novamente sua senha"
          value={passwordVerify}
          onChangeText={(passwordVerify)=> setPasswordVerify(passwordVerify)}
          secureTextEntry
        />
        
        <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleContinuar}>
          <Text style={styles.submitButtonText}>{buttonNext}</Text>
        </TouchableOpacity>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.optionButton} onPress={handleFuncionario}>
            <Text style={styles.optionButtonText}>Sou Funcionario</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionButton} onPress={handleTelaInicial}>
            <Text style={styles.optionButtonText}>Tela inicial</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
    title2: {
      fontSize: 32,
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
      maringTop: 15,
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
      marginBottom: 0,
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




  export default EmpresaLogin;