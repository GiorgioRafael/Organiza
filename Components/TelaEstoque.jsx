import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import FormProduto from './FormProduto';
const TelaEstoque = ({ navigation, produtos }) => {
    
    // Função para renderizar cada item da lista
    const renderProduto = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.nome}</Text>
        <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
        <Text style={styles.itemText}>Preço: {item.preco}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Estoque  </Text>
  
        {/* <TextInput
          style={styles.input}
          placeholder="Nome do produto"
          value={nomeProduto}
          onChangeText={setNomeProduto}
        />
  
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
  
        
        <TouchableOpacity style={styles.addButton} onPress={adicionarProduto}>
          <Text style={styles.addButtonText}>Novo produto</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('FormProduto')}>
          <Text style={styles.addButtonText}>Novo produto</Text>
        </TouchableOpacity>

  
        {/* Lista de produtos adicionados */}
        <Text style={styles.titleH2}>Produtos</Text>
        <FlatList
          data={produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderProduto}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto no estoque.</Text>}
          style={styles.list}
        />
  
        {/* Botão para voltar à tela inicial */}
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

  
export default TelaEstoque;
