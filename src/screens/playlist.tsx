import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,Dimensions, ScrollView, FlatList } from 'react-native';
import { Button } from '../../Button/Button'; // Verifique se o caminho está correto
import Imagens from "../../img/img"
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function playlist({ navigation }) {
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
   
        <View style={styles.containerLogin}>
            

  
        <View style={styles.ftplay}>
                <Image source={Imagens.svanth} style={styles.kyan} />
            </View>

         </View>
      
   
  );
}

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection:'column',
   
  },
 
  ftplay: {
    
   
  },

  kyan: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems:'center', 
    
},

 

});

export default playlist;
