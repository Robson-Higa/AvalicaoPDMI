import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, ScrollView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';

export default function EditorScreen() {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    mostrar();
  }, []);

  const salvarTexto = async () => {
    try {
      await AsyncStorage.setItem('textoSalvo', texto);
      alert('Texto salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar o texto:', error);
    }
  };

  const mostrar = async () => {
    try {
      const textoSalvo = await AsyncStorage.getItem('textoSalvo');
      if (textoSalvo) {
        setTexto(textoSalvo);
      }
    } catch (error) {
      console.error('Erro ao carregar o texto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editor de Texto</Text>
      <ScrollView style={styles.scrollView}>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Digite seu texto aqui..."
          value={texto}
          onChangeText={setTexto}
        />
      </ScrollView>
      <Button title="Salvar Texto" onPress={salvarTexto} color={'#49cccc'}/>
    </View>
  );
}


