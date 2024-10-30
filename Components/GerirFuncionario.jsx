import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { fetchFuncionarios } from './FireBaseList';

const GerirFuncionario = ({ navigation, route }) => {
  const { userId } = route.params;
  const [funcionarios, setFuncionarios] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const getFuncionarios = async () => {
        const funcionariosList = await fetchFuncionarios(userId);
        setFuncionarios(funcionariosList);
      };

      getFuncionarios();
    }, [userId])
  );



  const renderFuncionario = ({ funcionario }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemCode}>{funcionario.codigo}</Text>
        <Text style={styles.itemName}>{funcionario.nome}</Text>
      </View>
      <TouchableOpacity 
        style={styles.detailsButton} 
        onPress={() => navigation.navigate('DetalhesProduto', { produto: item })}
      >
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque</Text>
      <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('TelaEstoque')}>
          <Text style={styles.optionButtonText}>Voltar</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('TelaFuncionarios')}>
          <Text style={styles.optionButtonText}>Novo funcionario</Text>
        </TouchableOpacity>


      </View>

      {/* <View style={styles.searchBarView}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar por código ou nome do produto"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon2 name="barcode" size={20} color="#999" style={styles.searchIcon} />

      </View> */}


      <View style={styles.tableHeader}>
        <Text style={styles.headerTextCodigo}>Codigo Funcionario</Text>
        <Text style={styles.headerTextNome}>Nome Funcionario</Text>
      </View>

      {/* <FlatList
        data={filteredProdutos}
        keyExtractor={(item) => item.id}
        renderItem={renderProduto}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto no estoque.</Text>}
        style={styles.list}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  titleH2: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
    textAlign: 'center',
  },
  optionButtonTextFunc: {
    color: '#fff',
    fontSize: 11,
    marginLeft: 5,
    textAlign: 'center',
  },
  searchBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#007aff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  headerTextCodigo: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  headerTextNome: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#fff',
      flex: 1,
      textAlign: 'center',
  },
  
  list: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemCode: {
    fontSize: 10,
    fontWeight: '400',
    flex: 1.4,
    marginEnd: 10,
  },
  itemName: {
    fontSize: 10,
    fontWeight: '500',
    flex: 2,
    textAlign: 'left',
  },
  itemQuantity: {
    fontSize: 10,
    flex: 1,
    textAlign: 'left',
  },
  itemPrice: {
    fontSize: 10,
    flex: 0.8,
    textAlign: 'left',
  },
  detailsButton: {
    backgroundColor: '#007aff',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
    fontSize: 16,
  },
});

export default GerirFuncionario;