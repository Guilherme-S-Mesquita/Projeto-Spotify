import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions, Image} from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto
import Imagens from "../../img/img"

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

      <View style={styles.login}>Login</View>
      <Image style={styles.logo} source={Imagens.logoSpotify}/> 

      <View style={styles.inputLogin}>
        <Text style={styles.textInput}>E-mail ou nome de usuário</Text>
        <View style={styles.itensLogin}>
          <TextInput  
            style={styles.boxUser}
            placeholderTextColor='#CDE5D4'
            keyboardType='default'
            value={email}
            onChangeText={setEmail}
          />

       </View> 

        <Text style={styles.textInput}>Senha</Text>

        <View style={styles.itensLogin}>

        <TextInput  
            style={styles.boxUser}
            placeholderTextColor='#CDE5D4'
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

  logo:{
    width: 35,
    height: 35,
    margin:20,
    position:"relative",
    right:6,
    bottom:10,
  },

  inputLogin: {
    display: 'flex',
    marginTop:-45,
    right:6,
  },

  itensLogin: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top:90
  },

  boxUser: {
    padding: 12,
    width: '96%',
    color: '#CDE5D4',
    backgroundColor:'#423F3E',
    marginTop: 30,   
    borderRadius: 45,
    marginLeft: 7,
    
  },

  textInput: {
    position: 'relative',
    top: 118,
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
    fontSize: 24,
    left: 22
    
  },

  entrar: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  entrarButton: {
    width: '30%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    top:55,
  },

  buttonSemSenha:{
    width: width * 0.4,
    height: height * 0.02,
    display:'flex',
    justifyContent:'center',
    marginTop:-15,
  },

  buttonComSenha:{
  margin:20,
  },

  login:{
    color:'#CDE5D4',
    justifyContent:'center',
    display:'flex',
    fontWeight:'bold',
    fontFamily:'Sans-serif',
    textAlign:'justify',
    alignItems: 'center',
    right:110,
    top:38,
    bottom: 7,
  }
});

export default LoginScreen;
