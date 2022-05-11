import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
       <Text style={styles.words}>FELICITAITIONS</Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  button: {
    alignContent: 'center',
    width: "60%",
    height: 50,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 2.5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.80,
    shadowRadius: 16,
    elevation: 24,
  },
  words: {
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  },
});
