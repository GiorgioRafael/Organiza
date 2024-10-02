import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const FormProduto = ( { navigation, route }) => {
    const { produtos, setProdutos } = route.params;
    const [nomeProduto, setNomeProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');

    const adicionarProduto = () => {
        if (nomeProduto && quantidade && preco) {
          const newProduto = { nome: nomeProduto, quantidade: quantidade, preco: preco };
          setProdutos([...produtos, newProduto]);
          setNomeProduto('');
          setQuantidade('');
          setPreco('');
        }
      };

        // Função para renderizar cada item da lista

  return (
<View style={styles.container}>
        <Text style={styles.title}>Estoque  </Text>
  
        {/* Campo para inserir o nome do produto */}
        <TextInput
          style={styles.input}
          placeholder="Nome do produto"
          value={nomeProduto}
          onChangeText={setNomeProduto}
        />
  
        {/* Campo para inserir a quantidade */}
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />

<TextInput
          style={styles.input}
          placeholder="Preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
  
        {/* Botão para adicionar o produto */}
        <TouchableOpacity style={styles.addButton} onPress={adicionarProduto}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('TelaEstoque', {nomeProduto: nomeProduto, quantidade: quantidade, preco: preco})}>
          <Text style={styles.addButtonText}>Voltar</Text>
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
