import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.caixaTopo}>
        <Text style={styles.textao}>Header do BCC</Text>
        <Text style={styles.textinho}>Bem vindo a Mobile</Text>
      </View>
      <View style={styles.caixaMeio}> 
        <Text style={styles.textao}>Lokinho</Text>
      </View>
      <View style={styles.caixaTopo}>
        <Text style={styles.textinho}>MATHEUS OTARIO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textinho: {
    fontSize: '20px',
    fontWeight: '1000',
  },
  caixaTopo: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  caixaMeio: {
    fontSize: '30px',
    height: 500,
    width: '100%',
    backgroundColor: 'pink', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textao: {
    fontSize: '50px',
    fontWeight: '100',
  }
});
