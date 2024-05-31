import React, { useState } from "react"
import { View, Text, StyleSheet, Image, Dimensions } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Button } from "./Button/Button" // Verifique se o caminho está correto
import Imagens from "./img/img"


//import Alan from './spotifyAtv/assets/alan.png';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />

      <Button
        title="Va para Login"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}

function login({ navigation }) {
  const [loading, setIsLoading] = useState(false);

  function handleButtonPress() {
    setIsLoading(true);
    console.log("pressionou");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <View style={styles.containerLogin}>


      <View style={styles.contentButton}>
        <Image source={Imagens.Alan} style={styles.imgUser} />
        <View style={styles.buttons}>
          <Button
            style={styles.buttonHome}
            variant="home"
            isLoading={loading}
            title="Tudo"
            onPress={() => navigation.native("Home")}
          />


          <Button
            style={styles.buttonMusica}
            disabled
            variant="home"
            isLoading={loading}
            title="Música"
            onPress={() => navigation.native("Home")}
          />
          <Button
            style={styles.buttonPodCast}
            disabled
            variant="home"
            isLoading={loading}
            title="Podcasts"
            onPress={() => navigation.native("Home")}
          />
        </View>
      </View>


    <View style={styles.containerPlaylists}>  
      <View style={styles.minhaPlaylist}>
        <View style={styles.playlistColuna}>
          <View style={styles.playlist}>
            <Image source={Imagens.racionais} style={styles.imgPlayList} />

            <Text style={styles.textPlayList}>As de vilão</Text>
          </View>
        </View>

        <View style={styles.playlistColuna1}>
          <View style={styles.playlist1}>
            <Image source={Imagens.pumaj} style={styles.imgPlayList} />

            <Text style={styles.textPlayList1}>Pumajl</Text>
          </View>
        </View>

        <View style={styles.playlistColuna1}>
          <View style={styles.playlist1}>
            <Image source={Imagens.macaco} style={styles.imgPlayList} />

            <Text style={styles.textPlayList2}>Artic Monkeys</Text>
          </View>
        </View>

        <View style={styles.playlistColuna1}>
          <View style={styles.playlist1}>
            <Image source={Imagens.maisEmenos} style={styles.imgPlayList} />

            <Text style={styles.textPlayList3}>PaGod</Text>
          </View>
        </View>

        

     </View>


     <View style={styles.minhaPlaylist1}>
        <View style={styles.playlistColuna1}>
          <View style={styles.playlist1}>
            <Image source={Imagens.euTentei} style={styles.imgPlayList} />

            <Text style={styles.textPlayList4}>Eu tenteiii</Text>
          </View>
        </View>

        <View style={styles.playlistColuna1}>
          <View style={styles.playlist1}>
            <Image source={Imagens.vouPassar} style={styles.imgPlayList} />

            <Text style={styles.textPlayList5}>Edit Romario</Text>
          </View>
        </View>

        <View style={styles.playlistColuna1}>
          <View style={styles.playlist1}>
            <Image source={Imagens.reliquias} style={styles.imgPlayList} />

            <Text style={styles.textPlayList6}>Reliquias</Text>
          </View>
        </View>

        <View style={styles.playlistColuna1}>
          <View style={styles.playlist1}>
            <Image source={Imagens.Raggae} style={styles.imgPlayList} />

            <Text style={styles.textPlayList7}>Raggae 
      🌿
      </Text>
          </View>
        </View>



     </View>




    </View>
     
   
    </View>
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#222222",
    flexDirection:'column'
  },
  contentButton: {
    width: '30%',
    height: '10%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
    left: 8



  },
  buttonHome: {
    width: width * 0.15,
    height: 20,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center'


  },

  buttonHome1: {
    width: width * 0.16,
    height: height * 0.02,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center'

  },
  buttonMusica: {
    width: width * 0.19,
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
    width: width * 0.09,
    height: height * 0.05,
    borderRadius: 100
  },
  containerPlaylists:{
    flexDirection:'row'
  },

  minhaPlaylist: {
    width: width * 0.5,
    height: height * 0.4,
    marginTop:15,


  },
  playlistColuna: {
    width: width * 0.46,
    height: height * 0.09,
    marginTop: 7,
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: '#413F42',
    flexDirection:'column'

  },
  playlist: {
    display: 'flex',
    justifyContent: 'center'


  },
  imgPlayList: {
    position: 'relative',
    height: height * 0.09,
    width: width * 0.15,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,


  },
  textPlayList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    right: width * 0.13,
    color: 'white',


  },

  minhaPlaylist1:{
   marginTop:15,
   
    
  },

  playlistColuna1: {
    width: width * 0.46,
    height: height * 0.09,
    marginTop:7,
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: '#413F42',
    flexDirection:'column'

  },
  playlist1: {
    display: 'flex',
    justifyContent: 'center',
  


  },
  imgPlayList1: {
    display:'flex',
    justifyContent:'center',
    height: height * 0.09,
    width: width * 0.15,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,


  },
  textPlayList1: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    right: width * 0.19,
    color: 'white',
  },
  textPlayList2: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    right: width * 0.08,
    color: 'white',
  },
  textPlayList3: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    right: width * 0.19,
    color: 'white',
  },
  textPlayList4: {
    width: width * 0.26,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    left: width * 0.06,
    color: 'white',
  },
  textPlayList5: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    right: width * 0.09,
    color: 'white',
  },
  textPlayList6: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    right: width * 0.15,
    color: 'white',
  },
  textPlayList7: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'relative',
    bottom: height * 0.06,
    right: width * 0.132,
    color: 'white',
  },

});



export default App;
