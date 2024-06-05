import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text,TouchableOpacity } from 'react-native';



export default function DonationsScreen() {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={value}
      placeholder="Entrez la valeur du don"
      keyboardType="numeric"
      onChangeText={setValue}
    />
    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  error: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },

  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '80vw',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});