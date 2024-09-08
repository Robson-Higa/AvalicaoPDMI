import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

export default function HomeScreen() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apps Uteis</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Area')}
            >
            <Text style={styles.buttonText}>Calcular a Area</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Combustivel')}
            >
            <Text style={styles.buttonText}>Calcular o Melhor Combustível</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Editor')}
            >
              <Text style={styles.buttonText}>Editor de Texto</Text>
            </TouchableOpacity>  
        </View>
    </View>
  );
}

