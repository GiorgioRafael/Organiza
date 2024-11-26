import { app } from '../config';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

const db = getFirestore(app);

export async function firebaseUpdate(userId, produtoId, produtoAtualizado) {
    const produtoDoc = doc(db, 'Empresas', userId, 'produto', produtoId);
    try {
        await updateDoc(produtoDoc, produtoAtualizado);
        Alert.alert('Produto atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar o produto', error);
    }
}

export const onProductUpdate = (userId, productId, callback) => {
    return firebase.database().ref(`/users/${userId}/products/${productId}`).on('value', snapshot => {
      callback(snapshot.val());
    });
  };
