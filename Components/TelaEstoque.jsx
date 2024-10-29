import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import { fetchProdutos } from './FireBaseList';

const TelaEstoque = ({ navigation, route }) => {
  const [produtos, setProdutos] = useState([]);
  const { userId } = route.params;
  const [searchQuery, setSearchQuery] = useState('');

  useFocusEffect(
    useCallback(() => {
      const getProdutos = async () => {
        const produtosList = await fetchProdutos(userId);
        setProdutos(produtosList);
      };

      getProdutos();

      const backAction = () => {
        Alert.alert("Confirmação", "Você deseja sair do aplicativo?", [
          {
            text: "Cancelar",
            onPress: () => null,
            style: "cancel"
          },
          { text: "Sim", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [userId])
  );

  const filteredProdutos = produtos.filter(produto => 
    produto.Codigo_Produto.toLowerCase().includes(searchQuery.toLowerCase()) ||
    produto.NomeProduto.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProduto = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemCode}>{item.Codigo_Produto}</Text>
        <Text style={styles.itemName}>{item.NomeProduto}</Text>
        <Text style={styles.itemQuantity}>{item.quantidade}</Text>
        <Text style={styles.itemPrice}>R$ {item.preço}</Text>
      </View>
      <TouchableOpacity 
        style={styles.detailsButton} 
        onPress={() => navigation.navigate('DetalhesProduto', { produto: item })}
      >
        <Icon name="info" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('FormProduto')}>
          <Icon name="add-circle-outline" size={24} color="#fff" />
          <Text style={styles.optionButtonText}>Novo Produto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('GerirFuncionario')}>
          <Icon name="exit-to-app" size={24} color="#fff" />
          <Text style={styles.optionButtonText}>Registrar saída</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('TelaFuncionarios')}>
          <Icon name="people" size={20} color="#fff" />
          <Text style={styles.optionButtonTextFunc}>Funcionários</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarView}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar por código ou nome do produto"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon2 name="barcode" size={20} color="#999" style={styles.searchIcon} />

      </View>


      <View style={styles.tableHeader}>
        <Text style={styles.headerTextCodigo}>Codigo</Text>
        <Text style={styles.headerTextDescricao}>Descrição</Text>
        <Text style={styles.headerTextQtd}>Quantidade</Text>
        <Text style={styles.headerTextPreco}>Preço</Text>
      </View>

      <FlatList
        data={filteredProdutos}
        keyExtractor={(item) => item.id}
        renderItem={renderProduto}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto no estoque.</Text>}
        style={styles.list}
      />
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
    textAlign: 'left',
  },
  headerTextDescricao: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#fff',
      flex: 1,
      textAlign: 'left',
  },
  headerTextQtd: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'left',
  },
  headerTextPreco: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'left',
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
    textAlign: 'left',
    marginTop: 20,
    color: '#666',
    fontSize: 16,
  },
});

export default TelaEstoque;