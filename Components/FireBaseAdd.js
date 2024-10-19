import { useState } from 'react';
import { app } from '../config';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


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
