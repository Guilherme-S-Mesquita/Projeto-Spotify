import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto
import Imagens from "../../img/img"


function PrimaryLogin({ navigation }) {
  const [loading, setIsLoading] = useState(false);

  function handleButtonPress() {
    setIsLoading(true);
    console.log("pressionou");
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Login'); // Navegar para a tela de login
    }, 2000);
  }




  return (
    <View style={loginPrincipal.containerLogin}>
      <View style={loginPrincipal.entrar}>
      
      <Image style={loginPrincipal.imgLogo}  source={Imagens.spotifyLogo} />
  
        <View>
          <Text style={loginPrincipal.text}>Milhões de músicas á sua escolha.</Text>
          <Text style={loginPrincipal.text1}>Grátis nos Spotify.</Text>
        </View>
        <View style={loginPrincipal.entrarButton}>

          <Button  
            variant="primary" 
            isLoading={loading}
            title="inscreva-se grátis" 
            onPress={handleButtonPress} // Atualize para handleButtonPress
          />

          <View style={loginPrincipal.transparente}>

          <Image source={Imagens.celular} style={loginPrincipal.celular}  />
            <Button 
             style = {loginPrincipal.botaocll} 
              variant="outline" 
              isLoading={loading}
              title="Continuar com um número de" 
              onPress={handleButtonPress} // Atualize para handleButtonPress
            />
         
         <Image source={Imagens.podGoogle} style={loginPrincipal.google}  />
            <Button
              style = {loginPrincipal.botaogoogle} 
              variant="outline"   
              isLoading={loading}
              title="Continuar com o Google" 
              onPress={handleButtonPress} // Atualize para handleButtonPress
            />
         
         <Image source={Imagens.podFace} style={loginPrincipal.face}  />
            <Button 
              style = {loginPrincipal.botaoface} 
              variant="outline"  
              isLoading={loading}
              title="Continuar com Facebook" 
              onPress={handleButtonPress} // Atualize para handleButtonPress
            />

          </View>
        </View>
        <View style={loginPrincipal.entrarFinal}>
          <Button  
            isLoading={loading}
            variant="noBorder" 
            title="Entrar"
            onPress={() => navigation.navigate('LoginScreen')} // Navegar para a tela de login
          />
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("screen")
const loginPrincipal = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection:'column',
  },
  entrar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 1,
    flexDirection:'column',
  },


  imgLogo: {
    height:height * 0.1,
    width :width * 0.2,
    position:'relative',
    marginTop:height * 0.4,
    bottom: height * 0.1
    
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  text1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  entrarButton: {
    width: width * 0.8,
    position:'relative',
    top:height * 0.13,
    
    
  },
  transparente: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: height * 0.5
  },
  entrarFinal: {
    position:'relative',
    bottom:height * 0.3,
  },
  google:{
    width: 40,
    height: 40,
    position:'absolute',
    left:width * 0.05,
    display:'flex',
    top:80
  },

  face:{
    width: 24,
    height: 24,
    position:'absolute',
    left:width * 0.07,
    display:'flex',
    top:155
  },
  celular:{
    width: 25,
    height: 30,
    position:'absolute',
    left:width * 0.07,
    display:'flex',
    top:20
  },
  transparente2 :{
    display:'flex',
    position:'relative',
    top:55,
  },

  botaocll:{
  top: 10,
  
  },

  botaogoogle:{
    top:25,
  },

  botaoface:{
    top:40,
  },

  

});

export default PrimaryLogin;
