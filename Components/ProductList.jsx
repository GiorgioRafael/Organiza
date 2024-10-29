import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductList = () => {
  const data = [
    { id: '1', codigo: '001', descricao: 'Produto A', quantidade: 10, preco: 19.99 },
    { id: '2', codigo: '002', descricao: 'Produto B', quantidade: 5, preco: 29.99 },
    { id: '3', codigo: '003', descricao: 'Produto C', quantidade: 15, preco: 9.99 },
    { id: '4', codigo: '004', descricao: 'Produto D', quantidade: 8, preco: 39.99 },
    { id: '5', codigo: '005', descricao: 'Produto E', quantidade: 20, preco: 14.99 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.codigoCell]}>{item.codigo}</Text>
      <Text style={[styles.cell, styles.descricaoCell]} numberOfLines={1} ellipsizeMode="tail">{item.descricao}</Text>
      <Text style={[styles.cell, styles.quantidadeCell]}>{item.quantidade}</Text>
      <Text style={[styles.cell, styles.precoCell]}>${item.preco.toFixed(2)}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerRow}>
      <Text style={[styles.headerCell, styles.codigoCell]}>Codigo</Text>
      <Text style={[styles.headerCell, styles.descricaoCell]}>Descricao</Text>
      <Text style={[styles.headerCell, styles.quantidadeCell]}>Qtd</Text>
      <Text style={[styles.headerCell, styles.precoCell]}>Preco</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
      stickyHeaderIndices={[0]}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 10,
    marginBottom: 2,
  },
  headerCell: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 1,
    alignItems: 'center',
  },
  cell: {
    textAlign: 'left',
  },
  codigoCell: {
    width: '20%',
  },
  descricaoCell: {
    width: '40%',
  },
  quantidadeCell: {
    width: '20%',
  },
  precoCell: {
    width: '20%',
  },
});

export default ProductList;