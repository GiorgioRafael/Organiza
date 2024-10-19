import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
const produtoCollection = collection(db, 'produto');

export async function fetchProdutos() {
  const produtoSnapshot = await getDocs(produtoCollection);
  const produtoList = produtoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return produtoList;
}