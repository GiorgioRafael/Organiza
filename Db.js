
import FormProduto from "./Components/FormProduto";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Button , StyleSheet , Text , View, TextInput } from "react-native";
import * as SQLite from 'expo-sqlite';

export default function App({navigation, route}) {
  const { produtos } = route.params;



  async function addNew() {

    const db = await SQLite.openDatabaseAsync("databaseApp")
    
    await db.runAsync(
      "INSET INTO product (nome, preco, quantidade) VALUES (?, ?)",
      felipe, 2, 3
    );
    
    const allRows = await db.getAllAsync('SELECT * FROM product');
    let newArray = []
    for (const row of allRows) {
      console.log(row.id, row.nome, row.preco, row.quantidade);
      newArray.push(row.nome);
    }
    setListProdutos(newArray);
  }


  useEffect(() => {
    async function setup() {
        
        const db = await SQLite.openDatabaseAsync("databaseApp");
    
        /*await db.execAsync(`
          DROP TABLE IF EXISTS product;
          `);
        */
    
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY NOT NULL, nome TEXT NOT NULL, preco DOUBLE NOT NULL, quantidade INTEGER);
        `);

        const result = await db.runAsync('INSERT INTO produto (nome, preco, quantidade) VALUES (?, ?, ?)', produtos.nome, produtos.preco, produtos.quantidade);
        
        
    }
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setTextInput}></TextInput>
      <Button title="Add" onPress={() => addNew()}></Button>
      { listProduct.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "Black",
    borderWidth: 1,
    padding: 10,
  },
})
