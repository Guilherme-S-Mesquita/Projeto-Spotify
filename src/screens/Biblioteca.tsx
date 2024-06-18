import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { Button } from "../../Button/Button"; // Verifique se o caminho está correto
import Imagens from "../../img/img";
import * as Font from 'expo-font';

const Biblioteca: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'), // Ajuste o caminho conforme necessário
      'Rubik-Regular' : require ('../../assets/fonts/Rubik-Regular.ttf')
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Ou um indicador de carregamento
  }


    return ( 
         <ScrollView>
        <View style={styles.container}>
        <View style= {styles.navContent}>
          <View style={styles.navItens}>
          <Image source={Imagens.Alan} style={styles.imgUser} />
          <View>
           <Text style={styles.textLibary}> Sua Biblioteca  </Text>
            </View>
            <View></View>
          </View>
          </View>
           <View style={styles.contentButton}>
         
          <View style={styles.buttons}>
            <Button
               disabled
              style={styles.buttonHome}
              variant="home"
              isLoading={loading}
              title="Playlist"
              onPress={() => navigation.native("Home")}
            />


            <Button
              style={styles.buttonMusica}
              disabled
              variant="home"
              isLoading={loading}
              title="Podcasts"
              onPress={() => navigation.native("Home")}
            />
            <Button
              style={styles.buttonPodCast}
              disabled
              variant="home"
              isLoading={loading}
              title="Artistas"
              onPress={() => navigation.native("HomeScreen")}
            />
          </View>
        </View>





        </View>
    </ScrollView>
    );

}

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#222222',
    flexDirection:'column',
  

    },

 contentButton: {
    width: width * 1,
    marginTop:  width * 0.09,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: height * 0.05




  },
  navContent:{
    height: height * 0.11,
    width: width * 1,
    display:'flex',
    alignItems:"center",
    flexDirection:'row',
   
  },
  navItens:{
    flexDirection:'row',
    alignItems:"center",
    marginTop:20,
    marginLeft:15,
    
  },
  textLibary:{
    fontWeight:'600',
    fontSize:20,
    color: 'white',
    marginLeft:10,
    fontFamily: 'Rubik-Regular', // Use o nome da fonte carregada

 
 
    
  },
  buttonHome: {
    width: width * 0.20,
    height: 20,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rubik-Regular', // Use o nome da fonte carregada


  },

  buttonHome1: {
    width: width * 0.2,
    height: height * 0.02,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rubik-Regular', // Use o nome da fonte carregada

  },
  buttonMusica: {
    width: width * 0.2,
    height: height * 0.02,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rubik-Regular', // Use o nome da fonte carregada
  },
  buttonPodCast: {
    width: width * 0.22,
    height: height * 0.02,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rubik-Regular', // Use o nome da fonte carregada
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 5,
  },
  imgUser: {
    width: width * 0.12,
    height: height * 0.07,
    borderRadius: 100,
    display:'flex',
    justifyContent:'center',
  },
});

export default Biblioteca;