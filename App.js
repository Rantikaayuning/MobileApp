import React from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="useless placeholder" />
      <Button title="Add" />
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
