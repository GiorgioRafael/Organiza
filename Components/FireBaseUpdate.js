import { useState } from 'react';
import { app } from '../config';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function FirebaseUpdate() {
const db = getFirestore(app)
const produtoCollection = collection(db, 'produtos')
const [busca, setBusca] = useState('')
}