import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,Dimensions,ScrollView, TextInput } from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto
import Imagens from "../../img/img"
import * as Font from 'expo-font';

function buscar({navigation}) {
    const [loading, setIsLoading] = useState(false);

    return (
       
<View style={styles.containerBuscar}>
       
  <View style={styles.pai}>
    <View style={styles.viewFoto}>
          <Image source={Imagens.Alan} style={styles.imgUser}/>
        <Text style={styles.buscarText}>Buscar</Text>
        <Image source={Imagens.camerakau} style={styles.camera}/>
    </View>
  </View>

  <ScrollView>
  <Image source={Imagens.lupa} style={styles.lupa}/>

        <View style={styles.itensLogin}>
          <TextInput  
            style={styles.boxUser}
            placeholderTextColor='#7F8487'
            keyboardType='default'
          />
       </View> 


  
       <View style={styles.expoGenero}>
          <Text style={styles.explorar}>Explore por gêneros</Text>

          <Image source={Imagens.joelma} style={styles.rosa} />
          <Image source={Imagens.vino} style={styles.forro} />
          <Image source={Imagens.boiadeira} style={styles.cawboy} />

       </View>

    <View style={styles.visuText}>
    <Text style={styles.navegarSecao}>Navegar por todas as seções</Text>
    </View>
       <View style={styles.containerSecoes}>
            <View style={styles.secoesEscutadas}>
                <Image source={Imagens.renner} style={styles.renner} />
                <Image source={Imagens.sertanejo} style={styles.sertanejo} />
                <Image source={Imagens.recaida} style={styles.recaida} />
                <Image source={Imagens.indie} style={styles.indie} />
                <Image source={Imagens.essencia} style={styles.essencia} />
                <Image source={Imagens.rock} style={styles.rock} />
                <Image source={Imagens.funk} style={styles.funk} />
                <Image source={Imagens.gym} style={styles.gym} />
                <Image source={Imagens.eletronica} style={styles.eletronica} />
                <Image source={Imagens.trap} style={styles.trap} />
                <Image source={Imagens.musica} style={styles.musica} />
                <Image source={Imagens.moedas} style={styles.moedas} />
              </View>
       </View>
       </ScrollView>
</View>    

    );

}

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  containerBuscar: {
    flex: 1,
    backgroundColor: '#151515',
    flexDirection: 'column',

  },
  imgUser: {
    width: width * 0.10,
    height: height * 0.05,
    borderRadius: 100,
    display: 'flex',
    left:20,
  },
  viewFoto: {
  display: 'flex',
  justifyContent:'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'row',
  },

  buscarText: {
   color: '#F5F7F8',  
   fontWeight: 'bold',
   alignItems: 'center',
   justifyContent:'center',
   top: 5,
   left: width * 0.07,
  },
  pai:{
   alignItems:'flex-start',
   justifyContent:'center',
   display:'flex',
   width: width * 1,
   marginTop:height * 0.02,
   marginLeft: width * 0.01,

  },
  itensLogin: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top:8,   
  },

  explorar:{
    marginTop:-375,
    left:17,
    color:'white',
    fontWeight: 'bold',
  },

  expoGenero:{
    height:1,
  },
  boxUser: {
    padding: 13,
    width: '93%',
    height:39,
    color: 'black',
    backgroundColor:'#F5F7F8',
    marginBottom: height * 0.6,   
    borderRadius:5,
    marginLeft: 15,
    
  },
  secoesEscutadas:{

  },
  containerSecoes:{
    marginBottom: 30,
    flexDirection: 'row',
    width: width * 1,
    display: 'flex',
    marginLeft: width * 0.05,
  },
  
  renner:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius:5,
    marginTop:-150,
    right:2,
  },

 sertanejo:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius: 5,
    left:175,
    marginTop:-99,
  },
  recaida:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius:5,
    marginTop:20,
    right:2,
  },
  indie:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius: 5,
    left:175,
    marginTop:-99,
  },
 essencia:{
  width: width * 0.45,
  height: height * 0.15,
  borderRadius:5,
  marginTop:15,
  right:2,
  },
  rock:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius: 5,
    left:175,
    marginTop:-100,
  },
  funk:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius:5,
    marginTop:15,
    right:2,
  },
  gym:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius: 5,
    left:175,
    marginTop:-100,
  },
  eletronica:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius:5,
    marginTop:15,
    right:2,
  },
  trap:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius: 5,
    left:175,
    marginTop:-100,
  },
 musica :{
  width: width * 0.45,
  height: height * 0.15,
  borderRadius:5,
  marginTop:15,
  right:2,
  },
 
  moedas:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius: 5,
    left:175,
    marginTop:-100,
  },
  visuText:{
borderRadius: 9,
  },
  navegarSecao:{
    color:'#F5F7F8',
    marginTop:-180,
    left:15,
    fontWeight: 'bold',
  },
  camera:{
    width:30,
    height:30,
    position:'absolute',
    left:325,
    top:2
  },
  lupa:{
    width: 24,
    height: 24,
    position:'absolute',
    left:width * 0.05,
    display:'flex',
    zIndex:1,
    top:15,
  },

  rosa:{
    width:110,
    height:150,
    left:15,
    borderRadius:5,
  },
  
  forro:{
    width:120,
    height:160,
    left:130,
    marginTop:-150,
    borderRadius:5,
  },
  cawboy:{
    width:120,
    height:160,
    left:260,
    marginTop:-159,
    borderRadius:5,
  },
}
);


export default buscar;