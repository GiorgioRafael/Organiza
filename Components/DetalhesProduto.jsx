import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { getFirestore } from "firebase/firestore";
import { app } from '../config';
import { empresaDelete } from './FireBaseDelete';

const db = getFirestore(app);

const DetalhesProduto = ({ navigation, route }) => {
  const { userId, produto } = route.params; // Acessa o produto e userId passados via navegação


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>
      <Text>Código: {produto.Codigo_Produto}</Text>
      <Text>Nome: {produto.NomeProduto}</Text>
      <Text>Quantidade: {produto.quantidade}</Text>
      <Text>Preço: {produto.preco}</Text>

      <Button title='Excluir' onPress={() => { empresaDelete(userId, produto.id) }}/>



      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
    addButton: {
      backgroundColor: '#007AFF',
      padding: 15,
      borderRadius: 5,
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
  },
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