import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { styles } from './style.js';

export default function AreaScreen() {
  const [raio, setRaio] = useState('');
  const [area, setArea] = useState(null);

  const calculaArea = () => {
    const raioValor = parseFloat(raio);
    if (isNaN(raioValor) || raioValor <= 0) {
      alert('Insira um valor.');
      return;
    }
    const computedArea = Math.PI * Math.pow(raioValor, 2);
    setArea(computedArea.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora da Área do Círculo</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o raio em centímetros"
        value={raio}
        onChangeText={setRaio}
      />
      <Button title="Calcular Área" onPress={calculaArea} />
      {area !== null && (
        <Text style={styles.result}>Área: {area} cm²</Text>
      )}
    </View>
  );
}



