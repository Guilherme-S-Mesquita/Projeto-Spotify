import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import Imagens from "../../img/img"




function New({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.desenvolvedores}>
      
    
      <View  style={styles.geral}>
      <Image style={styles.spotify}  source={Imagens.logoSpotify} />
  
        <Text style={styles.apresentacao} >
          Conheça o time de desenvolvedores do {'\n'} SPOTIFY BRASIL!
        </Text>
    

      <View style={styles.row}>
    <View style={styles.dev}> 
    <View style={styles.foto}>
    
      <Image style={styles.imagem}  source={Imagens.devKauane} />
    </View>
   
    <Text style={styles.nomes}>
     Kauane Brandão,{'\n'}uma programadora back-end{'\n'}da equipe do Spotify Brasil.</Text>
    
    <Text style={styles.desc}></Text>
   </View> 
      </View>

        <View style={styles.row}>
   <View style={styles.dev}> 
    <View style={styles.foto}>
      <Image style={styles.imagem} source={Imagens.devNicolly}  />
    </View>
    <Text style={styles.nomes}>
     Nicolly Terra,{'\n'}uma desenvolvedora front-end{'\n'}da equipe do Spotify Brasil.</Text>
   </View> 
      </View>

        <View style={styles.row}>
 <View style={styles.dev}>
    <View style={styles.foto}>
      <Image style={styles.imagem} source={Imagens.devGui} />
    </View>
    <Text style={styles.nomes}>
     Guilherme Santos,{'\n'}um programador back-end {'\n'}da equipe do Spotify Brasil.</Text>
   </View> 
      </View>

      <View style={styles.row}>
   <View style={styles.dev}> 
    <View style={styles.foto}>
      <Image style={styles.imagem}  source={Imagens.devJoao} />
    </View>
    <Text style={styles.nomes}>
     João Torelli,{'\n'}um especialista em Big Data{'\n'}da equipe do Spotify Brasil</Text>
  </View>
      </View>

    </View>
    </View>
      </ScrollView>
  );
}


const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({

desenvolvedores: {
  flex:1,
  flexDirection:'column',
  backgroundColor:'#222222',

},

// div de fundo
  dev: {
    flex:1,
    backgroundColor:'#413F42',
    flexDirection: 'row',
    marginTop: 35,
    borderBottomWidth: '1px',
    borderBottomColor:'grey',
    display:'flex',  
    borderRadius:25,
    width: 360,
    height: 140,
    position:'absolute',
    left:25,
   
  },

geral: {
  color:'white',
  fontFamily:'sansserif',
  borderBottomWidth: '1px',
  borderBottomColor:'grey',
},

foto: {
 backgroundColor:'#413F42',
 height:'80px',
 width:'80px',
 borderRadius:40,
 marginLeft:'15px',
 marginTop:'50px',
 display:'flex',
},

nomes: {
  color:'#CDE5D4',
  // fontSize:'15px',
  justifyContent:'center',
  marginTop:'20px',
  display:'flex',
  fontWeight:'bold',
  fontFamily:'Sans-serif',
  textAlign:'justify',
  alignItems: 'center',
  left:35,
  bottom: 7,
},

row: {
  height:'200px',

},

desc: {
  color:'white',
  fontSize:'20px',
  flexDirection:'row',
  Left:'10px',
  marginTop:'50px',
},

imagem: {
  height:'100px',
  width:'90px',
  display:'flex',
  bottom:29,
  borderRadius:10,

 },

 spotify: {
  width: 75,
  height: 75,
  margin:20,
  position:"relative",
  left:width*0.35,
 },


apresentacao: {
  color:'#CDE5D4',
  fontSize:'20px',
  justifyContent:'center',
  marginTop:'30px',
  marginBottom:'20px',
  display:'flex',
  marginLeft:'10px',
  fontWeight:'bold',
  fontFamily:'Sans-serif',
  textAlign:'center',
  
},


}); 
export default New;