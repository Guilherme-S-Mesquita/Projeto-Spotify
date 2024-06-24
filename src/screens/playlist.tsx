import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto
import Imagens from "../../img/img";
import LinearGradient from 'react-native-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { assets } from '../../react-native.config';




const playlist: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const DATA = [
    
    {
      
      nome:'Aquariano Nato',
      email:'Mc Saci,Complexo dos Hits,DJ Sammer,...',
      imagem: Imagens.BandaDeJaVu,
  
    },
    {

      nome:'A Internet é Tóxica',
      email:'Dj Lc, DJ JOAO DA INESTAN, Mc Pretchako,...',
      imagem: Imagens.BandaDeJaVu,
    },
    {
      
      nome:'MTG QUEM NÃO QUER SOU EU',
      email:'DJ TOPO, Seu Jorge, Mc Leozin, Mc G15',
      imagem: Imagens.BandaDeJaVu,
    },
      {
      
      nome:'THE BOX MEDLEY FUNK 2',
      email:'THE BOX, Mc Brinquedo, Mc Cebezinho,Mc...',
      imagem: Imagens.BandaDeJaVu,
    },
    {
    
      nome:'Mtg Quero te Encontrar',
      email:'DJ JZ, Humberto & Ronaldo, Mc Mininin, DJ...',
      imagem: Imagens.BandaDeJaVu,
    },
    {
  
      nome:'De 10 Mulher 11 É Maluca',
      email:'MC Saci, MC Fahah, DJ Sammer, Dj Lc',
      imagem: Imagens.BandaDeJaVu,
    },
    {
      
      nome:'Mtg Forró',
      email:'dj sv, Doug Hits, Manim Vaqueiro',
      imagem: Imagens.BandaDeJaVu,
    },
      {

      nome:'Qual é seu desejo?',
      email:'Tz da Coronel, Ryu, The Runner, Nagali, C...',
      imagem: Imagens.BandaDeJaVu,
    },
   
  ];

  const Item = ({nome,cantores}) => (
    <View style={styles.item}>
        <Image source={Imagens.BandaDeJaVu} style={styles.aquariano} />
      <Text style={styles.nomes}>{nome}</Text>
      <Text style={styles.cantores}>{cantores}</Text>
     
    </View>
  );
  

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
<ScrollView>
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

      <View style={styles.iconsPlaylist}>
        <View style={styles.ButtonsPlaylist}>
          <Button
           style={{width: width * 0.1}} 
            size={20} 
            isLoading={loading}
            variant="noBorder"
            title=""
            color='#413F42'
            iconName="pluscircleo"
            onPress={() => navigation.native('Home')}
          />
           <Button 
             style={{width: width * 0.1}} 
            size={21} 
            isLoading={loading}
            color='#413F42'
            variant="noBorder"
            title=""
            iconName2="arrow-down-circle"
            onPress={() => navigation.native('Home')}
          />
          <Button 
            style={{width: width * 0.1}} 
            size={21} 
            isLoading={loading}
            color='#413F42'
            variant="noBorder"
            title=""
            iconName4="share-android"
            onPress={() => navigation.native('Home')}
          />
            <Button   
            size={21}
            style={{width: width * 0.1}}  
            isLoading={loading}
            color='#413F42'
            variant="noBorder"
            title=""
            iconName1="ellipsis-v"
            onPress={() => navigation.native('Home')}
          />


        </View>
        <View style={styles.ButtonPlay}>
        <Button   
            size={21}
            style={{width: width * 0.1}}  
            isLoading={loading}
            color='#413F42'
            variant="noBorder"
            title=""
            iconName5="shuffle"
            onPress={() => navigation.native('Home')}
          />

            <Button   
            size={50}
            style={{width: width * 0.1, position:'relative', bottom:height * 0.02, left:width * 0.02 }}  
            isLoading={loading}
            color='#1ED760'
            variant="noBorder"
            title=""
            iconName3="caret-forward-circle-sharp"
            onPress={() => navigation.native('Home')}
          />
          
        </View>
      </View>


      <SafeAreaView style={styles.container}>
  <FlatList
    data={DATA}
    renderItem={({ item }) => (
      <Item 
        nome={item.nome}
        cantores={item.email}
      />
    )}
    keyExtractor={(item, index) => index.toString()} // Usando o índice como chave única
  />
</SafeAreaView>



    </View>
    </ScrollView>



  );
}

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#151515',
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
    position: 'relative',
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
  infosPlaylist: {
    width: width * 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    left: width * 0.12,
    bottom: height * 0.03
  },
  subTexto1: {
    fontSize: 10,
    fontWeight: '700',
    color: '#454545',
    fontFamily: 'Rubik-Regular',
    marginTop: height * 0.02,
  },
  iconsPlaylist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width * 1,
    height: height * 0.1,
    position:'relative',
    bottom: height * 0.04,
  },
  ButtonsPlaylist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  ButtonPlay:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left:width*0.3


  },
  item:{
    backgroundColor: '#151515',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nomes:{
   color: 'white',
marginLeft:width * 0.06,
  },
  cantores:{
color:'gray',
marginLeft:width * 0.06,
},
container:{
  flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection:'row',
},
aquariano:{
width: width * 0.11,
height: height * 0.06,
zIndex:1,
top:39,
right: 25,
},
 



});

export default playlist;
