import React from "react";
import { TouchableOpacity,
     Text,
      StyleSheet,
      ActivityIndicator,
      View,
      TouchableOpacityProps, 
    } from "react-native";


    import AntDesign from '@expo/vector-icons/AntDesign';
    import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
    import Feather from '@expo/vector-icons/Feather';
    import Ionicons from '@expo/vector-icons/Ionicons';
    import { variants } from "./variantes";


//  <Feather name="smartphone" size={24} color="black" />
// <AntDesign name="google" size={24} color="black" />
// <FontAwesome5 name="facebook" size={24} color="black" />



interface ButtonProps {
    title: String;
    onPress: () =>void
    isLoading?: boolean;
    disabled?: boolean;
    iconName?: keyof typeof AntDesign.glyphMap;
    iconName1?: keyof typeof FontAwesome5.glyphMap;
    iconName2?: keyof typeof Feather.glyphMap;
    iconName3?: keyof typeof Ionicons.glyphMap;
    // as variantes estão na linha 67 da pasta variants.ts
    variant?: 'primary' | 'outline' | 'noBorder'| 'home';
    style?: TouchableOpacityProps ['style'];
 
}

export function Button ({
    title, 
    onPress, 
    isLoading= false,
    iconName,
    iconName1,
    iconName2,
    iconName3,
    variant = 'primary',
    disabled,
    style, }: 
    ButtonProps){
    const buttonVariant = variants[variant];
    // const backgroundColor = disabled ? '#B8B8B8' : 'white'
    const ButtonStyle = disabled? buttonVariant.disable : buttonVariant.enable
   
    return (
            <TouchableOpacity 
            disabled={isLoading || disabled}
            onPress={onPress} 
            style={[styles.container, { ...ButtonStyle.button}, style ]}>
               {isLoading? (
               <ActivityIndicator color="#fff"/>
               ):(  
                
                <View style={styles.content}>
               {iconName &&    <AntDesign 
                     style={{fontSize:20}} 
                     color="#413F42"
                     name={iconName}
                      />}

                       {iconName1 &&    <FontAwesome5
                     style={{fontSize:18}} 
                     color="white"
                     name={iconName1}
                      />}

                       {iconName2 &&    <Feather
                     style={{fontSize:18}} 
                     color="white"
                     name={iconName2}
                      />}
                      {iconName3 &&    <Ionicons
                     style={{fontSize:22}} 
                     color="white"
                     name={iconName3}
                      />}
                <Text style={[styles.title, {color: ButtonStyle.title.color}]}>
                    {title}
                    </Text> 
               </View>
               )}


            </TouchableOpacity>
    );    
}




const styles  = StyleSheet.create({
    container:{
        padding:16,
        borderRadius:30,
        height:50,
        width:'100%',
      
        
        
    },
    title:{
        display:'flex',
        textAlign:'center',
        fontWeight:'500',
        justifyContent:'center',
     
        
           
    
      
        
    },
    content: {
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        textAlign:'center',
     
    },
    

});