import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions } from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto

function LoginScreen({ navigation }) {
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginPress() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('HomeScreen'); // Navegar para a tela Home após login bem-sucedido
    }, 2000);
  }

  return (
    <View style={styles.containerLogin}>
      <View style={styles.inputLogin}>
        <Text style={styles.textInput}>E-mail ou nome de usuário</Text>
        <View style={styles.itensLogin}>
          <TextInput  
            style={styles.boxUser}
            placeholderTextColor='#7F8487'
            keyboardType='default'
            value={email}
            onChangeText={setEmail}
          />
        </View> 
        <Text style={styles.textInput}>Senha</Text>
        <View style={styles.itensLogin}>
          <TextInput  
            style={styles.boxUser}
            placeholderTextColor='#fff'
            keyboardType='default'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View> 
      </View>
      <View style={styles.entrar}>
        <View style={styles.entrarButton}>
          <Button
             style={styles.buttonComSenha} 
            variant="primary"  
            isLoading={loading}
            title="Entrar" 
            onPress={() => navigation.navigate('HomeScreen')} // Atualize para handleLoginPress
          />

            <Button
            style={styles.buttonSemSenha} 
            variant="outline"  
            isLoading={loading}
            title="Entrar sem senha" 
            onPress={() => navigation.navigate('HomeScreen')} // Atualize para handleLoginPress
          />
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection:'column',
  },
  inputLogin: {
    display: 'flex',
    marginTop: 30,   
  },
  itensLogin: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  boxUser: {
    padding: 12,
    width: '96%',
    color: 'white',
    backgroundColor: '#423F3E',
    marginTop: 30,   
    borderRadius: 5,
    marginLeft: 7,
  },
  textInput: {
    position: 'relative',
    top: 30,
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
    fontSize: 28,
    left: 5,
  },
  entrar: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  entrarButton: {
    width: '20%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonSemSenha:{
    width: width * 0.4,
    height: height * 0.02,
    display:'flex',
    justifyContent:'center'
  },
  buttonComSenha:{
  margin:20,
  },
});

export default LoginScreen;
