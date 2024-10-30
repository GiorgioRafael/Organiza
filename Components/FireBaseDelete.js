import { app } from '../config';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

const db = getFirestore(app);

export async function empresaDelete(userId, produtoId) {
    try {
        // Obtenha a referência do documento específico usando o ID do produto
        const produtoDocRef = doc(db, 'Empresas', userId, 'produto', produtoId);
        
        // Chame deleteDoc com a referência do documento
        await deleteDoc(produtoDocRef);
        
        Alert.alert('Produto deletado com sucesso!');
    } catch (error) {
        console.log('Erro, produto não deletado', error);
    }
}