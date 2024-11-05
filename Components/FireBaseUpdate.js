import { app } from '../config';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

export default function FirebaseUpdate() {
    const db = getFirestore(app);

    const updateDoc = async (userId, novosDados, navigation) => {
        const produtoDoc =  doc(db, 'Empresas', userId, 'produto', novosDados);
        try {
            await updateDoc(produtoDoc, {
  
        });
            Alert.alert('Produto atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar o produto', error);
        }
    }
}