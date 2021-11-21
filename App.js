import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Anotacao from './lib/model/anotacao';

export default function App() {

  var a = new Anotacao(1, "teste", "teste", "testes")

  console.warn(a);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
