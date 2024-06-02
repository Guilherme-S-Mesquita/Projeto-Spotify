
import React, {useState}  from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-web';
import { Button } from './Button/Button'; // Verifique se o caminho está correto


// import logo from './assets/spotifyLogo.png';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}

      />
        <Button
        title="Va para Login"
        onPress={() => navigation.navigate('login')}

      />
      
    </View> 
  );
}


function login({ navigation }) {
  const [loading, setIsLoading] = useState(false);

  function handleButtonPress() {
    setIsLoading(true);
    console.log("pressionou");
    setTimeout( () =>{
      setIsLoading(false)
    }, 2000);

  }

  return (
<View style={styles.containerLogin}>
     

  <View style={styles.inputLogin}>
  <Text style={styles.textInput}>E-mail ou nome de usuário</Text>
    <View style={styles.itensLogin}>
        <TextInput  
        style={styles.boxUser}
        
        placeholderTextColor='#7F8487'
        keyboardType={'username'}/>
      </View> 
      
      <Text style={styles.textInput}>Senha</Text>

      <View style={styles.itensLogin}>
      
        <TextInput  
        style={styles.boxUser}
        placeholderTextColor='#fff'
        keyboardType={'Password'}/>
      </View> 
   </View>



<View style={styles.entrar}>
  <View style={styles.entrarButton}>

    <Button  
    
    isLoading={loading}
    title="Entrar" 
    onPress={()=> navigation.native('Home')}
    />

  
     
  </View>
</View>


</View>
   

);
}
      
const styles = StyleSheet.create({

  containerLogin:{
    flex:1,
    backgroundColor:'#222222',
    
  },
  startLogin:{

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
   


  },
  inputLogin:{
    
    display:'flex',
 
    marginTop:30,   
  },
  itensLogin:{
    display:'flex',

    justifyContent:'center',
    width:'100%',
  },
  boxUser:{
    padding:12,
    width:'96%',
  
    color:'white',
    backgroundColor:'#423F3E',
    marginTop:30,   
    borderRadius:5,
    marginLeft:7,
  },
  textInput:{
    position:'relative',
    top:30,
    fontWeight:'bold',
    color:'white',
    width:'100%',
    fontSize:30,
    left:5,
  },
  entrar:{
    width:'100%',
    height:'30%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',


  },
  entrarButton:{
    width:'20%',
    height:'60%',
    display:'flex',
    justifyContent:'center',

  },
  button:{
    backgroundColor:'white'
  },



});
    


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
        <Stack.Screen name="login" component={login} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
