import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { app } from '../config';
import { getFirestore } from 'firebase/firestore';
import { createFuncionario } from './FireBaseAdd'
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';

export const TelaFuncionarios = ( { navigation, route }) => {
  const [funcNome, setFuncNome] = useState('');   
  const [funcDataNascimento, setFuncDataNascimento] = useState('');
  const [funcCpf, setFuncCpf] = useState('');
  const [funcRg, setFuncRg] = useState('');
  const [funcContato, setFuncContato] = useState('');
  const [funcEmail, setFuncEmail] = useState('');
  const [funcBairro, setFuncBairro] = useState('');
  const [funcGenero, setFuncGenero] = useState('');
  const { userId } = route.params;
  const [checked, setChecked] = React.useState('0');
  const handleAddProduto = async () => {
    if (funcNome && funcDataNascimento) {
      let funcInfo = {
        Nome: funcNome,
        DataDeNascimento: funcDataNascimento,
        CPF: funcCpf,
        RG: funcRg,
        Contato: funcContato,
        Email: funcEmail,
        Bairro: funcBairro,
        Genero: funcGenero,
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
    

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Criacao de novo funcionario</Text>
  
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
          placeholder="ex: 01/01/2000"
          placeholderTextColor="#c0c0c0"
          value={funcDataNascimento}
          onChangeText={(funcDataNascimento)=> setFuncDataNascimento(funcDataNascimento)}
        />
        <Text style={styles.formInput}>CPF Do Funcionario</Text>
        <TextInput
          style={styles.input}
          placeholder="CPF do funcionario"
          placeholderTextColor="#c0c0c0"
          value={funcCpf}
          onChangeText={(funcCpf)=> setFuncCpf(funcCpf)}
        />
        <Text style={styles.formInput}>RG</Text>
        <TextInput
          style={styles.input}
          placeholder="RG Do Funcionario"
          placeholderTextColor="#c0c0c0"
          value={funcRg}
          onChangeText={(funcRg)=> setFuncRg(funcRg)}
        />
        <Text style={styles.formInput}>Contato</Text>
        <TextInput
          style={styles.input}
          placeholder="Contato"
          placeholderTextColor="#c0c0c0"
          value={funcContato}
          onChangeText={(funcContato)=> setFuncContato(funcContato)}
        />
        <Text style={styles.formInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#c0c0c0"
          value={funcEmail}
          onChangeText={(funcEmail)=> setFuncEmail(funcEmail)}
        />
        <Text style={styles.formInput}>Bairro</Text>
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          placeholderTextColor="#c0c0c0"
          value={funcBairro}
          onChangeText={(funcBairro)=> setFuncBairro(funcBairro)}
        />
        <Text style={styles.formInput}>Gênero</Text>
        <View style={styles.radioButton}>
        <RadioButton
        value="Homem"
        status={ checked === 'Homem' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Homem')}>
        </RadioButton>
        <Text style={styles.textBlack}>M</Text>
        <RadioButton
        value="Mulher"
        status={ checked === 'Mulher' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Mulher')}>
        </RadioButton>
        <Text style={styles.textBlack}>F</Text>

        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduto}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={()=> navigation.navigate('GerirFuncionario')}>
          <Text style={styles.addButtonText}>Voltar</Text>  
        </TouchableOpacity>
</View>
</ScrollView>
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
  textBlack: {
    color: 'black',
  },
  titleH2: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
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
