import { useState } from 'react';
import { app } from '../config';
import { addDoc, getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { Link } from 'expo-router';
import { Routes } from '../routes/index.routes';
import { FormProduto } from './FormProduto';

const db = getFirestore(app)
const produtoCollection = collection(db, 'produto')

export async function createOne(produto) {
    try {
        await addDoc(produtoCollection, produto);
        alert('Produto cadastrado com sucesso!');
    } catch (error) {
        console.log('Erro ao cadastrar o produto: ', error);
}
}

export async function createEmpresaInfo(empresaInfo, navigation) { //navigation sendo passado como prop SOU UM GENIO
    try {
      // Create a new document in the Empresas collection with an auto-generated ID
      const empresaDocRef = await addDoc(collection(db, 'Empresas'), {});
  
      // Add the empresaInfo to the Info_Empresa collection within the new document
      await setDoc(doc(empresaDocRef, 'Info_Empresa', 'Data'), empresaInfo);
  
      Alert.alert('Cadastrado com sucesso!', "Empresa cadastrada com sucesso!", [{
        text: "OK",
        onPress: () => navigation.navigate('LoginScreen') }]);   
    } catch (error) {
      console.log('Erro ao cadastrar as informações da empresa: ', error);
    }
  }