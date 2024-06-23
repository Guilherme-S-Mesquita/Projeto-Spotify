import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto
import Imagens from "../../img/img"
import LinearGradient from 'react-native-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import * as Font from 'expo-font';




const playlist: React.FC<{ navigation: any }> = ({ navigation }) => {
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
    return null;
  }




  return (

    <View style={styles.containerLogin}>
      <View style={styles.nav}>

        <View style={styles.imgPrincipal}>
          <AntDesign style={styles.icon} name="arrowleft" size={24} color="white" />
          <Image source={Imagens.euTentei} style={styles.imgPlayList} />
        </View>
      </View>
      <View style={styles.textPlaylist}>
        <View >
          <Text style={styles.textTitle}>Finja que vc esta num edit do Chico moedas</Text>
          <Text style={styles.subTexto}>Eu não aguento mais errar</Text>
        </View>
        <View style={styles.criadorPlay}>
          <Image source={Imagens.Alan} style={styles.imgUser} />
          <Text style={styles.textCriador}>Allan</Text>
        </View>
        <View style={styles.infosPlaylist}>
              <Text style={styles.subTexto1}><Fontisto name="world-o" size={15} color="#454545" />    310.003 salvamentos . 5h 57min</Text>
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
    flexDirection: 'column',

  },


  nav: {
    marginTop: width * 0.1,
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
    width: width * 1,
    height: height * 0.3,
    flexDirection: 'column',
  },


  imgPrincipal: {
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
    width: width * 1,
    height: height * 0.3,
    flexDirection: 'row',
  },
  icon: {
    position: 'relative',
    right: width * 0.18,

  },
  imgPlayList: {
    width: width * 0.44,
    height: height * 0.24,
  },
  textPlaylist: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: width * 0.8,
    fontFamily: 'Rubik-Regular'

  },
  textTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 21,
    position: 'relative',
    left: width * 0.04,
  },
  subTexto: {
    fontSize: 10,
    fontWeight: '700',
    color: '#454545',
    marginLeft: 8,
    marginBottom: 30,
    width: width * 0.35,
    fontFamily: 'Rubik-Regular',
    marginTop: height * 0.02,
    left: width * 0.03,
  },
  criadorPlay: {
    width: width * 0.8,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position:'relative',
    bottom: height * 0.03,
    left: width * 0.05,
    
    
  },
  imgUser: {

    width: width * 0.05,
    height: height * 0.03,
    borderRadius: 100
  },
  textCriador: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    position: 'relative',
    left: width * 0.02,
    fontFamily: 'Rubik-Regular',
  },
  infosPlaylist:{
    width: width * 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position:'relative',
    left:width * 0.12,
    bottom: height * 0.03
   


  },
  subTexto1:{
    fontSize: 10,
    fontWeight: '700',
    color: '#454545',
    fontFamily: 'Rubik-Regular',
    marginTop: height * 0.02,
    
  },


});

export default playlist;
