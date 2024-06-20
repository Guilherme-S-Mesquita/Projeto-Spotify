import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { Button } from "../../Button/Button"; // Verifique se o caminho está correto
import Imagens from "../../img/img";
import * as Font from 'expo-font';
import Octicons from '@expo/vector-icons/Octicons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Biblioteca: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'), // Ajuste o caminho conforme necessário
      'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf')
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


    <View style={styles.container}>
      <View style={styles.navContent}>
        <View style={styles.navItens}>
          <Image source={Imagens.Alan} style={styles.imgUser} />
          <View>
            <Text style={styles.textLibary}> Sua Biblioteca  </Text>
          </View>
          <View style={styles.iconsNav}>
            <Octicons name="search" size={24} color="white" />
            <FontAwesome6 name="add" size={24} color="white" style={styles.searchIcon} />
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

      <View style={styles.imgBiblioteca}>
        <View style={styles.iconsBiblioteca}>
          <Octicons name="arrow-switch" size={14} color="white" style={styles.iconSeta} />
          <Text style={styles.textIcon}> Recentes</Text>
          <Feather name="menu" size={14} color="white" style={styles.iconMenu} />
        </View>

        <View style={styles.containerMinhasPlaylists}></View>
        <View style={styles.itensMinhaPlaylist}>
          <Image source={Imagens.pumaj} style={styles.imgPlaylists} />
          <View style={styles.textMinhaPlaylist}>
            <Text style={styles.textPlaylist}>Musicas Curtidas</Text>
            <Text style={styles.subTextPlaylist}>Musicas Curtidas</Text>

          </View>

        </View>
      </View>





    </View>

  );

}

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection: 'column',



  },

  contentButton: {
    width: width * 1,
    marginTop: width * 0.09,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: height * 0.05,
  },
  navContent: {
    height: height * 0.24,
    width: width * 1,
    display: 'flex',
    alignItems: "flex-start",
    flexDirection: 'column',
  },
  navItens: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 20,
    marginLeft: 15,
  },
  textLibary: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    fontFamily: 'Rubik-Regular', // Use o nome da fonte carregada
  },
  iconsNav: {
    flexDirection: "row",
    marginLeft: width * 0.2,
  },
  searchIcon: {
    position: 'relative',
    left: width * 0.08
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
    display: 'flex',
    justifyContent: 'center',
  },

  imgBiblioteca: {
    flexDirection: 'column'
  },
  iconsBiblioteca: {
    flexDirection: 'row',
  },
  iconSeta: {
    transform: [{ rotate: '90deg' }],
    marginLeft: width * 0.03,
    marginRight: width * 0.02,

  },
  iconMenu: {
    position: 'relative',
    left: width * 0.75,

  },
  textIcon: {
    fontSize: 10,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Rubik-Regular',

  },
  containerMinhasPlaylists: {
    flexDirection: 'row',
    width: width * 1,
    marginTop:13,
  },
  itensMinhaPlaylist: {
    flexDirection: 'column',
    width: width * 0.35,
    height: height * 0.24,
  },
  imgPlaylists: {
    width: width * 0.3,
    height: height * 0.17,
    marginLeft: width * 0.03,
  },
  textMinhaPlaylist: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    right: width * 0.02,
  },
  textPlaylist:{
    marginTop:12,
    fontSize: 11,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Rubik-Regular',
  },
  subTextPlaylist:{
    fontSize: 9,
    fontWeight: '700',
    color: '#454545',
    position:'relative',
    right: width * 0.023,
    
  },

});

export default Biblioteca;