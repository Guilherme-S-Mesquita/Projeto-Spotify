import React, { useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Button } from "./Button/Button" // Verifique se o caminho está correto


//import Alan from './spotifyAtv/assets/alan.png';

import Alan from './assets/alan.png'
import racionais from './assets/racionais.jpg'


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
        <Image source={Alan} style={styles.imgUser} />
        <View style={styles.buttons}>
          <Button
            style={styles.buttonHome}
            variant="home"
            isLoading={loading}
            title="Tudo"
            onPress={() => navigation.native("Home")}
          />


          <Button
            style={styles.buttonHome}
            disabled
            variant="home"
            isLoading={loading}
            title="Música"
            onPress={() => navigation.native("Home")}
          />
          <Button
            style={styles.buttonHome1}
            disabled
            variant="home"
            isLoading={loading}
            title="Podcasts"
            onPress={() => navigation.native("Home")}
          />
        </View>
      </View>


      <View style={styles.containerMinhaPlaylist}>

        <View style={styles.playlistColuna1}>


        </View>

        <View style={styles.playlistColuna}>
        <Image source={racionais} style={styles.imgPlayList} />
           
         <Text style={styles.textPlayList}>Playlist de Malandro</Text>

           


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





const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#222222",
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
    width: 60,
    height: 20,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center'


  },
  buttonHome1: {
    width: 65,
    height: 20,
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
    width: 35,
    height: 35,
    borderRadius: 100
  },

  containerMinhaPlaylist: {
    width: '100%',
    height: '40%',
    backgroundColor: '#fff'


  },
  playlistColuna:{
      width:'45%',
      height:'20%',
      marginTop:15,
      marginLeft:8,
      borderRadius:10,
      backgroundColor:'#413F42'

  },
  imgPlayList:{
      height:'99%',
      width:'30%',
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10,

   
  },
  textPlayList:{
    display:'flex',
    justifyContent:'flex-end',
    

  },
  playlistColuna1:{


  },


});



export default App;
