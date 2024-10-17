import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';



const EmpresaLogin = ({ navigation }) => {
    const [empresaNome, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
      // logica envio dos dados


      //se o usuario existir na database:
      navigation.navigate('TelaEstoque'); //ir para tela estoque
 
    };
  
    const handleEmployeePress = () => {
      navigation.navigate('FuncionarioLogin');

    };
  
    const handleCompanyPress = () => {
      console.log('Tenho uma empresa pressed');
      // logica para criacao de conta/empresa
    };
  let Loginpart = 1;
    const title = '{Organiza}';
    return (
      <View style={styles.container}>
              <LinearGradient
          colors={['#090979', '#020024']}
          style={styles.background}
          />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.formInput}>Nome do gestor</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome do gestor"
          onChangeText={(text)=> setEmpresa(text)}
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
          onChangeText={(text)=> setSenha(text)}
          secureTextEntry
        />
        <Text
        style={styles.formInput}>
          Repita sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          value={password}
        //onchangeText={logica de verificacao da equalidade da senha}
          secureTextEntry
        />
        
        <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>

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
      marginTop: 15,
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




  export default EmpresaLogin;