import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App Saúde</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Calcular ICQ</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('dddd')}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

       <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ssss')}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

       <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ddgggg')}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

    </View>
  );
}

