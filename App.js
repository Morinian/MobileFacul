import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [cep, setCEP] = React.useState("");
  const [cepBuscado, setCepBuscado] = React.useState("");

  function Endereco ({CEP}){

    if(!CEP){
      return (<Text>cep não encontrado</Text>)
    }
  
    return(
      <View>
        <Text style={styles.buttonText}>Log: {CEP.logradouro}</Text>
        <Text style={styles.buttonText}>Cep: {CEP.cep}</Text>
        <Text style={styles.buttonText}>Bairro: {CEP.bairro}</Text>
        <Text style={styles.buttonText}>Localidade: {CEP.localidade}</Text>
        <Text style={styles.buttonText}>Estado: {CEP.estado}</Text>
      </View>
    )
  }

  async function carregarCEP(){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await response.json();
    setCepBuscado(data);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <View style={styles.caixaTopo}>

        <Text style={styles.textao}>Buscar CEP</Text>

        <TextInput 
          style={styles.input}
          onChangeText={setCEP}
          value={cep}
          placeholder='04696-000'
          keyboardType='numeric'
        />   

        <TouchableOpacity onPress={carregarCEP} style={styles.button}>
          <Text style={styles.buttonText}> Consultar CEP </Text>
        </TouchableOpacity>

        <Endereco CEP = { cepBuscado ? cepBuscado :  null }/>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10403B',
  },
  scrollContent: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingVertical: 20,
  },
  caixaTopo: {
    width: 300,
    height: 600,
    borderRadius: 25,
    backgroundColor: '#127369',

    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textao: {
    color: '#ffff',
    fontSize: '35px',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ffff',
    padding: 10,
  },
  button:{
    backgroundColor: '#8AA6A3',
  },
  buttonText:{
    fontSize: '20px',
    color: '#ffff',
  }
});
