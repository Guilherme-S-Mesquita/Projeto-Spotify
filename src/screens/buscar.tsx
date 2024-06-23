import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,Dimensions,ScrollView, TextInput } from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto
import Imagens from "../../img/img"


function buscar({ navigation }) {
    const [loading, setIsLoading] = useState(false);





    return (
       
<View style={styles.containerBuscar}>
       
  <View style={styles.pai}>
    <View style={styles.viewFoto}>
          <Image source={Imagens.Alan} style={styles.imgUser}/>
        <Text style={styles.buscarText}>Buscar</Text>

    </View>
  </View>
 
  
        <View style={styles.itensLogin}>
          <TextInput  
            style={styles.boxUser}
            placeholderTextColor='#7F8487'
            keyboardType='default'
          />
       </View> 
    <View style={styles.visuText}>
    <Text style={styles.navegarSecao}>Navegar por todas as seções</Text>
    </View>
       <View style={styles.containerSecoes}>
            <View style={styles.secoesEscutadas}>
                <Image source={Imagens.sertanejo} style={styles.imgSecoes} />
              </View>
       </View>


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
    borderRadius: 100,
    position: 'relative',
    width: width * 0.09,
    height: height * 0.05,
    
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
   left: width * 0.02,

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

  boxUser: {
    padding: 13,
    width: '96%',
    color: 'black',
    backgroundColor:'#F5F7F8',
    marginBottom: height * 0.6,   
    borderRadius: 8,
    marginLeft: 7,
    
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
  imgSecoes:{
    width: width * 0.45,
    height: height * 0.15,
    borderRadius: 9,
  },
  visuText:{

  },
  navegarSecao:{
    color:'#F5F7F8',

  },
}
);


export default buscar;