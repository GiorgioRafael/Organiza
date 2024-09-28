import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import OlaMundo from './Components/OlaMundo';

const App = () => {
  const [soma, setSoma] = useState(0);

  const btnAdd = () => {
	setSoma(soma + 1);
  };
const Organiza = "{Organiza}";
  return (
	<View style={styles.container}>
    <Text style={
      {fontSize: 30,
        display: 'flex',
        alignItems: 'center',
      }
    }>{Organiza}</Text>
	  <OlaMundo />
	  <Button onPress={btnAdd} title="Click me" />
    <Text>Contador: {soma}</Text>
	</View>
  );
};

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
});

AppRegistry.registerComponent('main', () => App);

export default App;
