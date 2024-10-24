import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { app } from '../config';
import { getFirestore } from 'firebase/firestore';
import { createFuncionario } from './FireBaseAdd'
  
export const TelaFuncionarios = ( { navigation, route }) => {
    const [funcNome, setFuncNome] = useState('');   
    const [funcDataNascimento, setFuncDataNascimento] = useState('');
    const { userId } = route.params;

    const handleAddProduto = async () => {
      if (funcNome && funcDataNascimento) {
        let funcInfo = {
          Nome: funcNome,
          DataDeNascimento: funcDataNascimento,
          
        };
        try {
          await createFuncionario(userId, funcInfo);
          Alert.alert('Funcionario registrado com sucesso');
            setFuncNome('');
            setFuncDataNascimento('');
        } catch (error) {
          Alert.alert('Erro ao cadastrar o funcionario', error.message);
        }
      } else {
        Alert.alert('Por favor, preencha todos os campos.');
      }
    };
    
  // Função para renderizar cada item da lista

  return (
<View style={styles.container}>
        <Text style={styles.title}>Criacao de novo funcionario</Text>
  
        {/* Campo para inserir o nome do produto */}
        <Text style={styles.formInput}>Nome do funcionario</Text>
        <TextInput
        
          style={styles.input}
          placeholder="Nome do funcionario" 
          placeholderTextColor="#c0c0c0"
          value={funcNome}
          onChangeText={(funcNome)=> setFuncNome(funcNome)}
        />
        <Text style={styles.formInput}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição do produto"
          placeholderTextColor="#c0c0c0"
          value={funcDataNascimento}
          onChangeText={(funcDataNascimento)=> setFuncDataNascimento(funcDataNascimento)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduto}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={()=> navigation.navigate('TelaEstoque')}>
          <Text style={styles.addButtonText}>Voltar ao estoque</Text>
        </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleH2: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  formInput: {
    textAlign: 'left',
    width: '99.5%',
    marginBottom: 5,
    fontWeight: '400',
    color: 'black',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
    marginTop: 20,
  },
  itemContainer: {
    padding: 15,
    borderBottomColor: '#090979',
    borderBottomWidth: 1.5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});


export default TelaFuncionarios;
