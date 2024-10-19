import { useState } from 'react';
import { app } from '../config';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function FireBaseAdd() {
    const db = getFirestore(app)
    const produtoCollection = collection(db, 'produto')
    
    async function createOne(){
        await addDoc(produtoCollection, {
        NomeProduto: 'Arroz',
        preço: 10.99,
        quantidade: 100,
        Codigo_Produto: 501 
        }).then(()=>{
        id++
        alert('Produto cadastrado com sucesso!')
        }).catch((error)=>{
        console.log('Erro ao cadastrar o produto: ', error)
        })
    }
};

