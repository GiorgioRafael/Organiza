import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';



const FuncionarioLogin = ({ navigation }) => {
    const [empresaNome, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
      // logica verificacao de login abaixo


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
  
    const title = '{Organiza}';
    return (
      <View style={styles.container}>
              <LinearGradient
          colors={['#090979', '#020024']}
          style={styles.background}
          />
        <Text style={styles.title}>{title}</Text>

        <Text
        style={styles.title2}>
          Digite o código recebido pelo seu gestor</Text>
        <TextInput
          style={styles.input}
          placeholder="insira o código"
          value={password}
          onChangeText={(text)=> setPassword(text)}
          secureTextEntry
        />
        
        <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.optionButtonText}>Tela Principal</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionButton} onPress={handleCompanyPress}>
            <Text style={styles.optionButtonText}>Tenho uma empresa</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.buttonRowHelp}>
        <TouchableOpacity>
            <Text style={styles.needHelp}>Não tenho um código</Text>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Text style={styles.needHelp}>Preciso de ajuda</Text>
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
      fontSize: 28,
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




  export default FuncionarioLogin;