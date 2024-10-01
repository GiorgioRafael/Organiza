import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const TelaEstoque = ({ navigation }) => {

    // Serve para armazenar os produtos e adicionar novos itens!
    const [produtos, setProdutos] = useState([]);
    const [nomeProduto, setNomeProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
  
    // Função par adicionar um novo produto ao estoque
    const adicionarProduto = () => {
      if (nomeProduto && quantidade) {
        setProdutos([...produtos, { nome: nomeProduto, quantidade: quantidade }]);
        setNomeProduto('');
        setQuantidade('');
      }
    };
  
    // Função para renderizar cada item da lista
    const renderProduto = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.nome}</Text>
        <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Gerador de Estoque</Text>
  
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
  
        {/* Botão para adicionar o produto */}
        <TouchableOpacity style={styles.addButton} onPress={adicionarProduto}>
          <Text style={styles.addButtonText}>Adicionar Produto</Text>
        </TouchableOpacity>
  
        {/* Lista de produtos adicionados */}
        <FlatList
          data={produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderProduto}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto no estoque.</Text>}
          style={styles.list}
        />
  
        {/* Botão para voltar à tela inicial */}
        <Button title="Voltar para a tela inicial" onPress={() => navigation.goBack()} />
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
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
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
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

  
export default TelaEstoque;
