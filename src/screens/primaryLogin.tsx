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
      <Image source={Imagens.spotifyLogo} style={loginPrincipal.imgLogo}  />
        <View>
          <Text style={loginPrincipal.text}>Milhões de músicas á sua escolha.</Text>
          <Text style={loginPrincipal.text1}>Grátis nos Spotify.</Text>
        </View>
        <View style={loginPrincipal.entrarButton}>

          <Button  
            variant="primary" 
            isLoading={loading}
            title="inscreva-se gratis" 
            onPress={handleButtonPress} // Atualize para handleButtonPress
          />

          <View style={loginPrincipal.transparente}>

            <Button 
             style = {loginPrincipal.botaocll} 
              variant="outline" 
              isLoading={loading}
              iconName2='smartphone'
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
    position:'relative',
    bottom:height * 0.13,
    width: 55,
    height: 55,
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
    marginBottom:344
  },
  entrarFinal: {
    position:'relative',
    top:height * 0.15,
  },
  google:{
    width: 40,
    height: 40,
    position:'absolute',
    left:55,
    display:'flex',
    top:55
  },

  face:{
    width: 24,
    height: 24,
    position:'absolute',
    left:55,
    display:'flex',
    top:115
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
