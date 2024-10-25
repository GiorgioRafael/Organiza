import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Alert } from 'react-native';


const FuncionarioLogin = ({ navigation }) => {
    const [codigoLogin, setCodigoLogin] = useState('');
    const db = getFirestore();

const handleLoginFuncionario = async () => {
    if (!codigoLogin) {
      Alert.alert('Por favor, insira o código de login.');
      return;
    }

    try {
      console.log("Tentando verificar o código de login...");
      const empresasCollection = collection(db, 'Empresas');
      const empresasSnapshot = await getDocs(empresasCollection);
      let funcionarioEncontrado = false;

      for (const empresaDoc of empresasSnapshot.docs) {
        const empresaId = empresaDoc.id;
        const funcionariosCollection = collection(db, 'Empresas', empresaId, 'funcionarios');
        const funcionariosSnapshot = await getDocs(funcionariosCollection);

        for (const funcionarioDoc of funcionariosSnapshot.docs) {
          if (funcionarioDoc.id === codigoLogin) {
            const funcionarioData = funcionarioDoc.data();
            funcionarioEncontrado = true;
            Alert.alert('Login bem-sucedido!', 'Bem-vindo, ' + funcionarioData.Nome);
            navigation.navigate('TelaEstoque', { userId: empresaId });
            break;
          }
        }

        if (funcionarioEncontrado) break;
      }

      if (!funcionarioEncontrado) {
        Alert.alert('Código de login inválido.');
      }
    } catch (error) {
      console.log('Erro ao verificar o código de login: ', error);
      Alert.alert('Erro ao verificar o código de login.');
    }
  };
  
    const handleCompanyPress = () => {
      navigation.navigate('EmpresaLogin');
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
          placeholder="Insira o código"
          value={codigoLogin}
          onChangeText={(codigoLogin)=> setCodigoLogin(codigoLogin)}
        />
        
        <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleLoginFuncionario}>
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