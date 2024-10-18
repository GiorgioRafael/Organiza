import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Routes from './routes/index.routes';




//função princpal da aplicação
const App = () => {
  return (
       <Routes />
  )
}

export default App;



//Folha de estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage : 'linear-gradient(45deg, #3c1779, #0073c5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonRowHelp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  optionButtonText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  formInput: {
    textAlign: 'left',
    width: '99.5%',
    marginBottom: 5,
    fontWeight: '400',
    color: '#fff',
  },
  titleminusculo: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '110%',
  },
  needHelp: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 20,
  }
});