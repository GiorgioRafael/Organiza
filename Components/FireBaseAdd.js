
import { app } from '../config';
import { addDoc, getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import { FIREBASE_AUTH } from '../config';
const db = getFirestore(app)


export async function createOne(userId, produto) {
  try {
      const produtoCollection = collection(db, 'Empresas', userId, 'produto');
      await addDoc(produtoCollection, produto);
      Alert.alert('Produto cadastrado com sucesso!');
  } catch (error) {
      console.log('Erro ao cadastrar o produto: ', error);
  }
}

export async function createEmpresaInfo(empresaInfo, navigation) {
    try {
    const user = FIREBASE_AUTH.currentUser;
    if (!user) {
      throw new Error('Usuário não autenticado');
    }
      const userId = user.uid;
      const empresaDocRef = doc(db, 'Empresas', userId);
      await setDoc(empresaDocRef, {
        empresaInfo
      })
  
      Alert.alert('Empresa cadastrada com sucesso!', "Continue para fazer o login", [{
        text: "Continuar",
        onPress: () => navigation.navigate('LoginScreen') }]);   
    } catch (error) {
      console.log('Erro ao cadastrar as informações da empresa: ', error);
    }
  }
  
