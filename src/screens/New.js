import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import Imagens from "../../img/img"




function New({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.desenvolvedores}>
      
    
      <View  style={styles.geral}>
      <Image style={styles.spotify}  source={Imagens.spotifyLogo} />
  
        <Text style={styles.apresentacao} >
          Conheça o time de desenvolvedores do Spotify Brasil!
        </Text>
      
      


      <View style={styles.row}>
  <View style={styles.dev}>
    <View style={styles.foto}>
    
      <Image style={styles.imagem}  source={Imagens.devKauane} />
    </View>
   
    <Text style={styles.nomes}>
    Conheça Kauane Brandão, uma programadora backend vital na equipe do Spotify Brasil. {'\n'}Com sua perícia técnica, ela aprimora a experiência dos usuários, impulsionando a plataforma líder de streaming de música no país.</Text>
    
    <Text style={styles.desc}></Text>
  </View>
      </View>

      <View style={styles.linha}></View>

        <View style={styles.row}>
  <View style={styles.dev}>
    <View style={styles.foto}>
      <Image style={styles.imagem} source={Imagens.devNicolly}  />
    </View>
    <Text style={styles.nomes}>
    Nicolly Terra é uma desenvolvedora front-end na equipe do Spotify Brasil. Sua expertise em design de interface e usabilidade contribui diretamente para aprimorar a experiência dos usuários contribuindo para a experiência do usuário na plataforma de streaming de música.
</Text>
  </View>
      </View>

      <View style={styles.linha}></View>

        <View style={styles.row}>
  <View style={styles.dev}>
    <View style={styles.foto}>
      <Image style={styles.imagem} source={Imagens.devGui} />
    </View>
    <Text style={styles.nomes}>
    Conheça Guilherme Mesquita, um talentoso programador backend que {'\n'}com sua expertise técnica, ele contribui para aprimorar a plataforma de streaming de música líder no país,{'\n'} enriquecendo a experiência dos usuários com inovação e eficiência.</Text>
  </View>
      </View>

    <View style={styles.linha}></View>


      <View style={styles.row}>
  <View style={styles.dev}>
    <View style={styles.foto}>
      <Image style={styles.imagem}  source={Imagens.devJoao} />
    </View>
    <Text style={styles.nomes}>
    João Torelli, especialista em Big Data na equipe do Spotify Brasil, utiliza análises {'\n'}avançadas para personalizar a experiência dos usuários, contribuindo para a posição de liderança{'\n'} da plataforma no mercado de streaming de música brasileiro.</Text>
  </View>
      </View>

      <View style={styles.linha}></View>

  

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
  backgroundColor:'#121111',

},


 dev: {
   flex:1,
   backgroundColor:'#28a148',
  flexDirection: 'row',
  height:'400px',
  borderBottomWidth: '1px',
  borderBottomColor:'grey',
  display:'flex',
  borderRadius:50,

 },

geral: {
  color:'white',
  fontFamily:'sansserif',
  borderBottomWidth: '1px',
  borderBottomColor:'grey',
},

foto: {
 
 backgroundColor:'white',
 height:'80px',
 width:'80px',
 borderRadius:40,
 marginLeft:'15px',
 marginTop:'50px',
 display:'flex',
},

nomes: {
  color:'white',
  fontSize:'15px',
  justifyContent:'center',
  marginTop:'20px',
  display:'flex',
  fontWeight:'bold',
  fontFamily:'Sans-serif',
  textAlign:'justify',
  alignItems: 'center',
  
},

row: {
  height:'220px',
  

},
desc: {
  color:'white',
  fontSize:'20px',
  flexDirection:'row',
  Left:'10px',
  marginTop:'50px',

},

imagem: {
  height:'80px',
  width:'80px',
  borderRadius:40,
  display:'flex',
 },

 spotify: {
  width: 75,
  height: 75,
  margin:20,
  position:"relative",
  left:width*0.35,
 },

botao: {
  backgroundColor:'#121111',
},

apresentacao: {
  color:'white',
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

linha: {
  backgroundColor:'#121111',
  height:'20px',
}

}); 
export default New;