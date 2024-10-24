import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


const DetalhesProduto = ({ navigation, route }) => {
  const { produto } = route.params; // Acessa o produto passado via navegação

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>
      <Text>Código: {produto.Codigo_Produto}</Text>
      <Text>Nome: {produto.NomeProduto}</Text>
      <Text>Quantidade: {produto.quantidade}</Text>
      <Text>Preço: {produto.preco}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
      color: '#666',
    },
    button: {
      marginTop: 20,
    }
  });
  

export default DetalhesProduto;