import 'react-native-gesture-handler';

import React, { useState, useCallback } from 'react';
import { Text, View, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import FormProduto from './FormProduto';
import { fetchProdutos } from './FireBaseList';

const TelaEstoque = ({ navigation, route }) => {
  const [produtos, setProdutos] = useState([]);

  // utilizacao do usefocuseffect para carregar os produtos toda vez que a tela é exibida
  useFocusEffect( 
    useCallback(() => {
      const getProdutos = async () => {
        const produtosList = await fetchProdutos();
        setProdutos(produtosList);
      };

      getProdutos();
    }, [])
  );

    // Função para renderizar cada item da lista
    const renderProduto = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.Codigo_Produto}</Text>
        <Text style={styles.itemText}>{item.NomeProduto}</Text>
        <Text style={styles.itemText}>{item.quantidade}</Text>
        <Text style={styles.itemText}>{item.preço}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Estoque  </Text>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('FormProduto')}>
          <Text style={styles.addButtonText}>Novo produto</Text>
        </TouchableOpacity>

  
        {/* Lista de produtos adicionados */}
        <Text style={styles.titleH2}>Produtos</Text>

        <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Codigo</Text>
        <Text style={styles.headerText}>Descrição</Text>
        <Text style={styles.headerText}>Quantidade</Text>
        <Text style={styles.headerText}>Preço</Text>
      </View>

        <FlatList
          data={produtos}
          keyExtractor={(item)=> item.id}
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
      padding: 15,
    },
    title: {
      paddingTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    tableHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: '#ddd',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
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
      padding: 10,
      borderBottomColor: '#090979',
      borderBottomWidth: 1,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemText: {
      fontSize: 12,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 20,
      color: '#666',
    },
    headerText: {
      fontSize: 12,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
    },
  });

  
export default TelaEstoque;
