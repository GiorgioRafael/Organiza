import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from '../config';
import { snapshot } from "node:test";


export default function ShowFireBaseData() {
    const meuDoc = doc( db, 'funcionarios' ,'QWdeHCSIr3vCvCX91c4G')
    getDoc(meuDoc)
    .then((snapshot)=> {
        if (snapshot.exists()) {
            console.log(snapshot.data())
        }else {
            alert('Não há dados cadastrados!')
        }
    })
    .catch((error)=> {
        console.log('Erro ao buscar os dados: ', error)
    })
}