import React, { useState } from "react"
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native"
import { Button } from "../../Button/Button" // Verifique se o caminho está correto
import Imagens from "../../img/img"
import TabRoutes from '../routes/tab.routes'



function Biblioteca({ navigation }) {
  const [loading, setIsLoading] = useState(false);

  function handleButtonPress() {
    setIsLoading(true);
    console.log("pressionou");
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Home'); 
    }, 2000);
  }


    return ( 
         <ScrollView>
        <View style={styles.container}>
        <View style= {styles.navContent}>
          <View style={styles.navItens}>
          <Image source={Imagens.Alan} style={styles.imgUser} />
          <View style={styles.textLibary}>Sua Biblioteca</View>
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
    position: 'relative',
    left: 15,
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
  },
  textLibary:{
    fontWeight:'700',
    fontSize:20,
    color: 'white',
 
    
  },
  buttonHome: {
    width: width * 0.20,
    height: 20,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center'


  },

  buttonHome1: {
    width: width * 0.2,
    height: height * 0.02,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center'

  },
  buttonMusica: {
    width: width * 0.2,
    height: height * 0.02,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center'
  },
  buttonPodCast: {
    width: width * 0.22,
    height: height * 0.02,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center'
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
    justifyContent:'center'
  },
});

export default Biblioteca;