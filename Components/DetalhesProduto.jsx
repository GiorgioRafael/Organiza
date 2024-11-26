import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, Modal } from 'react-native';
import { empresaDelete } from './FireBaseDelete';
import { firebaseUpdate } from './FireBaseUpdate';

const DetalhesProduto = ({ navigation, route }) => {
  const [editable, setEditable] = useState(false);
  const { userId, produto } = route.params;
  const [editarTitle, setEditarTitle] = useState('Editar');
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [nomeAtualizado, setNomeAtualizado] = useState(produto.NomeProduto);
  const [precoAtualizado, setPrecoAtualizado] = useState(produto.preço ? produto.preço.toString() : '');
  const [quantidadeAtualizada, setQuantidadeAtualizada] = useState(produto.quantidade ? produto.quantidade.toString() : '');
  const [editing, setEditing] = useState(false);
  const [quantidadeVendida, setQuantidadeVendida] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleVoltar = () => {
    if (isEditPressed) {
      Alert.alert('Você está editando um produto', 'Deseja sair sem salvar as alterações?',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Sair',
            onPress: () => { navigation.navigate('TelaEstoque') }
          },
        ]
      )
    } else {
      navigation.goBack();
    }
  };

  const handleEdit = () => {
    setEditing(!editing);
    setIsEditPressed(!isEditPressed);
    setEditable(!editable);
    setEditarTitle(editable ? 'Editar' : 'Salvar');
    if (editing === true && quantidadeAtualizada && nomeAtualizado && precoAtualizado) {
      let produtoAtualizado = {
        NomeProduto: nomeAtualizado,
        preço: parseFloat(precoAtualizado),
        quantidade: parseInt(quantidadeAtualizada),
      };

      firebaseUpdate(userId, produto.id, produtoAtualizado);
    }
  };

  const handleVenda = () => {
    setModalVisible(true);
  };

const handleConfirmar = () => {
  const quantidadeVendidaNum = parseInt(quantidadeVendida, 10);
  const quantidadeAtualizadaNum = parseInt(quantidadeAtualizada, 10);

  if (quantidadeVendidaNum <= quantidadeAtualizadaNum) {
    let produtoAtualizado = {
      NomeProduto: nomeAtualizado,
      preço: parseFloat(precoAtualizado),
      quantidade: quantidadeAtualizadaNum - quantidadeVendidaNum,
    };

    firebaseUpdate(userId, produto.id, produtoAtualizado)
      .then(() => {
        console.log(`Quantidade vendida: ${quantidadeVendida}`);
        setModalVisible(false);
        setQuantidadeVendida('');
        navigation.goBack(); // Volta para a tela anterior
        setTimeout(() => {
          navigation.navigate('DetalhesProduto', { userId, produto: { ...produto, ...produtoAtualizado } });
        }, 100); // Navega de volta para a tela atual após um pequeno atraso
      })
      .catch((error) => {
        console.error("Erro ao atualizar o produto: ", error);
      });
  } else {
    Alert.alert('Erro', 'A quantidade vendida não pode ser maior que a quantidade em estoque');
  }
};
  const handleDelete = () => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: () => { empresaDelete(userId, produto.id, navigation) }
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Quantos itens foram vendidos?</Text>
            <TextInput
              style={styles.input}
              placeholder="Quantidade vendida"
              keyboardType="numeric"
              value={quantidadeVendida}
              onChangeText={setQuantidadeVendida}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>Detalhes do item</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Código:</Text>
          <TextInput
            editable={editable}
            style={styles.value}
            value={produto.Codigo_Produto}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            editable={editable}
            value={nomeAtualizado}
            onChangeText={(nomeAtualizado) => setNomeAtualizado(nomeAtualizado)}
            style={styles.value}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Quantidade:</Text>
          <TextInput
            value={quantidadeAtualizada}
            editable={editable}
            onChangeText={(quantidadeAtualizada) => setQuantidadeAtualizada(quantidadeAtualizada)}
            style={styles.value}
          />
        </View>

        {/* Input de preço */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Preço:</Text>
          <TextInput
            editable={editable}
            style={styles.label}
            value={precoAtualizado}
            onChangeText={(precoAtualizado) => setPrecoAtualizado(precoAtualizado)}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.editButton, isEditPressed && styles.editPressed]}
          onPress={handleEdit}>
          <Text style={styles.buttonText}>{editarTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.backButton, styles.botaoVoltar]} onPress={handleVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.VendaButton]} onPress={handleVenda}>
        <Text style={styles.buttonText}>Registrar venda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  botaoVoltar: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  VendaButton: {
    backgroundColor: '#ffbf00',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    marginHorizontal: 5,
  },
  editButton: {
    backgroundColor: '#007AFF',
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    flex: 1,
    marginLeft: 10,
  },
  backButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editPressed: {
    backgroundColor: '#32936f',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '80%',
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default DetalhesProduto;