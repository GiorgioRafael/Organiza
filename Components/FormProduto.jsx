import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { app } from '../config';
import { getFirestore } from 'firebase/firestore';
import { createOne } from './FireBaseAdd'
export const FormProduto = ( {navigation, route }) => {
    const [codigoProd, setCodigoProd] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const { userId } = route.params;

    const db = getFirestore(app)

    const validatePreco = () => {
      if (!preco.includes('.')) {
        setPreco(preco + '.00');
      } else {
        const [integerPart, decimalPart] = preco.split('.');
        if (decimalPart.length === 0) {
          setPreco(preco + '00');
        } else if (decimalPart.length === 1) {
          setPreco(preco + '0');
        }
      }
    };

    const handlePrecoChange = (text) => {
      const formattedText = text.replace(/,/g, '.');
      setPreco(formattedText);
    };
    
    const handleAddProduto = async () => {
      validatePreco();
      if (codigoProd && nomeProduto && quantidade && preco) {
        let produto = {
          Codigo_Produto: codigoProd,
          NomeProduto: nomeProduto,
          preço: parseFloat(preco),
          quantidade: parseInt(quantidade),
        };
        try {
          await createOne(userId, produto);
          Alert.alert('Produto cadastrado com sucesso!');
          setCodigoProd('');
          setNomeProduto('');
          setQuantidade('');
          setPreco('');
        } catch (error) {
          Alert.alert('Erro ao cadastrar o produto', error.message);
        }
      } else {
        Alert.alert('Por favor, preencha todos os campos.');
      }
    };
    
  // Função para renderizar cada item da lista

  return (
<View style={styles.container}>
        <Text style={styles.title}>Estoque  </Text>
  
        {/* Campo para inserir o nome do produto */}
        <Text style={styles.formInput}>Código do produto</Text>
        <TextInput
        
          style={styles.input}
          placeholder="ex.: 7898357417892" 
          placeholderTextColor="#c0c0c0"
          value={codigoProd}
          onChangeText={(codigoProd)=> setCodigoProd(codigoProd)}
          keyboardType = 'numeric'
        />
        <Text style={styles.formInput}>Nome do produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição do produto"
          placeholderTextColor="#c0c0c0"
          value={nomeProduto}
          onChangeText={(nomeProduto)=> setNomeProduto(nomeProduto)}
        />
  
        {/* Campo para inserir a quantidade */}
        <Text style={styles.formInput}>Quantidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Unidades disponíveis"
          placeholderTextColor="#c0c0c0"
          value={quantidade}
          onChangeText={(quantidade)=> setQuantidade(quantidade)}
          keyboardType="numeric"
        />
        <Text style={styles.formInput}>Preço</Text>
        <TextInput
          style={styles.input}
          placeholder="Preço do produto em R$"
          placeholderTextColor="#c0c0c0"
          value={preco}
          onChangeText={handlePrecoChange}
          keyboardType="numeric"
        />
  
        {/* Botão para adicionar o produto */}
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


export default FormProduto
