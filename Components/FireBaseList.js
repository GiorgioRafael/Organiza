import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);

export async function fetchProdutos(userId) {
  const produtoCollection = collection(db, 'Empresas', userId, 'produto');
  const produtoSnapshot = await getDocs(produtoCollection);
  const produtoList = produtoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return produtoList;
}

export async function fetchFuncionarios(userId) {
  const funcionarioCollection = collection(db, 'Empresas', userId, 'funcionario');
  const funcionarioSnapshot = await getDocs(funcionarioCollection);
  const funcionarioList = funcionarioSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return funcionarioList;
}