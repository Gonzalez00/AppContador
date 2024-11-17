import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const clic = () =>{
    setCount(count + 1)
  }

  const reiniciar = () => {
    setCount(0);
  }

  return (

       <View style={styles.container}>
        <Image style={styles.imagen} source={require('./IMAGEN/logofreeCode.png')} />
       
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      
      <TouchableOpacity style={styles.buttonClic} onPress={clic}>
        <Text style={styles.buttonText}>Clic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonReiniciar} onPress={reiniciar}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032263',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    marginHorizontal: 100, 
    marginBottom: 50, 
    marginTop: 50,
    height: 50,
    width: '100%',
    
  },
  counterBox: {
    width: 180,
    height: 180,
    borderColor: '#032263',
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: '#032263',
    borderWidth: 1,         
    borderColor: 'white',
  },
  counterText: {
    fontSize: 100,
    color: 'white',
  },
  buttonClic: {
    backgroundColor: '#032263',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,         
    borderColor: 'white',
  },
  buttonReiniciar: {
    backgroundColor: '#032263',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,         
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
