import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { Audio } from 'expo-av';
import Imagens from "../../img/img";
import { AntDesign } from '@expo/vector-icons';

const TelaMusic = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Tempo atual da música (em segundos)
  const duration = 136; // Duração total da música (em segundos)

  useEffect(() => {
    return () => {
      unloadSound();
    };
  }, []);

  const unloadSound = async () => {
    if (sound) {
      console.log('Unloading Sound');
      await sound.unloadAsync();
      setSound(null); // Limpa o estado do som ao descarregar
    }
  };

  const handleMusicPress = async () => {
    console.log(isPlaying ? 'Pausing Sound' : 'Loading Sound');
    
    if (!sound) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        require('../../assets/musica/ai-calica.mp3')
      );
      setSound(newSound);
    }

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity> 
          <AntDesign name="left" style={styles.buttonVoltar}  size={24} color="white" /> 
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: '400' }}> Fila - As de cria </Text>
      </View>

      <Image source={Imagens.pumaj} style={styles.albumImage} />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <AntDesign name="stepbackward" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMusicPress} style={styles.button}>
          <AntDesign name={isPlaying ? 'pause' : 'play'} size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <AntDesign name="stepforward" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Barra de reprodução personalizada */}
      <View style={styles.progressBar}>
        {/* Barra de progresso preenchida */}
        <View
          style={{
            width: `${(currentTime / duration) * 100}%`,
            height: 4,
            backgroundColor: 'white',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    alignItems: 'center',
  },
  albumImage: {
    width: 280,
    height: 320,
    borderWidth: 2,
    marginBottom: 20,
    marginTop: 40,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10, // Adiciona espaço entre os botões
  },
  button: {
    backgroundColor: '#1DB954', // Cor do botão do Spotify
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginVertical: 15, // Adiciona espaço entre os botões
  },
  progressBar: {
    width: '80%',
    height: 4,
    backgroundColor: '#1DB954', 
  },
  buttonVoltar: {
    marginBottom: 10,
    marginRight: 250,
  },
});

export default TelaMusic;

