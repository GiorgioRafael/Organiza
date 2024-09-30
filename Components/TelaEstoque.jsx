import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const TelaEstoque = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá mundo!</Text>
      <Button
        title='Voltar para a tela inicial'
        onPress={() => navigation.goBack()} // Navegar de volta à tela de login
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TelaEstoque;
