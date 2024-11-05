import { app } from '../config';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
const db = getFirestore(app);


export default function FirebaseUpdate() {

    const updateDoc = async (userId, novosDados, navigation) => {
        const produtoDoc =  doc(db, 'Empresas', userId, 'produto', novosDados);
        try {
            await updateDoc(produtoDoc, {
                Codigo_Produto: novosDados.Codigo_Produto,
                Nome_Produto: novosDados.Nome_Produto,
                Quantidade: novosDados.Quantidade,
                Preco: novosDados.Preco,
                Validade: novosDados.Validade,
                Descricao: novosDados.Descricao,
        });
            Alert.alert('Produto atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar o produto', error);
        }
    }
}