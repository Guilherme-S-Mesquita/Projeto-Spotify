import React, { useState } from "react"
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native"
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
    <ScrollView>
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

                <Text style={styles.textPlayList7}>Raggae 🌿</Text>
              </View>
            </View>
          </View>

        </View>




        <Text style={styles.titleSaudade}>Suas música estão com saudade</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerSaudadeMusica}>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.superShoque} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>Vibes de um mlk tra...</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.Eminem} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>Eminem</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.Saci} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>As melhores do Saci</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.BandaDeJaVu} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>Banda dejavú vol.01</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.racionais} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>RACIONAIS- SÓ AS...</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.wenked} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>The Wenked</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.cristiano} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>Zé neto e Cristiano</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>


            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.nelson} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>Nelson Gonçalves</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.braga} style={styles.imgEscutadas} />

              </View>
              <Text style={styles.textoPlaylistEscutada}>Leno Braga</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.noBaile} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.textoPlaylistEscutada}>POZE ANOS 70</Text>
              <Text style={styles.subTexto}>Playlists</Text>
            </View>
          </View>









        </ScrollView>

        <Text style={styles.titleSaudade}>Estações recomendadas</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerRecomendadas}>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.Kendrik} style={styles.imgEscutadas} />
              </View>

              <Text style={styles.subTexto}>Kendrik Lamar, DJ LD DOS PREDIN, MENOR OLIVEIRA</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.malone} style={styles.imgEscutadas} />
              </View>

              <Text style={styles.subTexto}>Mc Gw, Post Malone, Dj Arana, MC Menor MT, yuri redicop...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.haikais} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>MC PH, Mc IG, Mc Kevin, TrapLaudo, Vulgo FK</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.daddy} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>MC PH, Veigh, Nagalli, Tz da Coronel, Vulgo FK</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.corenel} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>Mc Ryan SP, mc IG, Luan Pereira, Orochi, Matuê</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.mcIg} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>Mc Ryan SP, Mc IG, MC PH, Mc Kevin, TrapLaudo</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.mcSaci} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>Mc Ryan SP, Mc IG, MC GP, WIU, Mc Paiva ZS</Text>
            </View>


            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.kayneWest} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>MC PH, Kyam, MC Kelvinho, Derek, Mu540</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.taylor} style={styles.imgEscutadas} />

              </View>
              <Text style={styles.subTexto}>Mc don Juan, DENNIS, Mc Livinho, DJ BOY, Matheus...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.pac} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>Alok, MC PH, MC Kevin e Chris, TrapLaudo, DJ TO...</Text>
            </View>
          </View>







        </ScrollView>

        <Text style={styles.titleSaudade}>Tocados recentemente</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerTocados}>
            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.pumaj} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Tropa do febre</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.euTentei} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Finja estar em uma edit do chico mo...</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.Eminem} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Superman</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.wenked} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Starboy</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.macaco} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>505</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.vouPassar} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Finja esta num edit do romario</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.Raggae} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Melhores Raggaes para 🌿🌿🌿</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.cristiano} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Playlist de corno 🐮 </Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.racionais} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>RACIONAIS-SÓ AS MELHORES</Text>
            </View>

            <View style={styles.playlistTocadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.maisEmenos} style={styles.imgTocadas} />
              </View>
              <Text style={styles.textoPlaylistTocadas}>Churrasquinho menos é mais </Text>
            </View>
          </View>
        </ScrollView>





        <Text style={styles.titleSaudade}>Estações recomendadas</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerRecomendadas}>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisKay} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisVeigh} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisMcIG} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisYankVino} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisYe} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisDerek} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisCorredor} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
            <View style={styles.containerRecomendadas}>
              <View style={styles.playlistEscutadas}>
                <View style={styles.escutadas}>
                  <Image source={Imagens.thisMarrone} style={styles.imgEscutadas} />
                </View>
                <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
              </View>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisBrown} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.thisVcGostaDePinga} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
          </View>

        </ScrollView>



        <Text style={styles.titleSaudade}>Seus artistas favoritos</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerAritistas}>
            <View style={styles.artistasFavoritos}>
              <View style={styles.escutadas}>
                <Image source={Imagens.artistaPuma} style={styles.imgArtistas} />
              </View>
              <Text style={styles.textoArtistasFavoritos}>Pumajl</Text>
            </View>

            <View style={styles.artistasFavoritos}>
              <View style={styles.escutadas}>
                <Image source={Imagens.artistaIG} style={styles.imgArtistas} />
              </View>
              <Text style={styles.textoArtistasFavoritos}>Mc Ig</Text>
            </View>

            <View style={styles.artistasFavoritos}>
              <View style={styles.escutadas}>
                <Image source={Imagens.artistaKayblack} style={styles.imgArtistas} />
              </View>
              <Text style={styles.textoArtistasFavoritos}>Kayblack</Text>
            </View>

            <View style={styles.artistasFavoritos}>
              <View style={styles.escutadas}>
                <Image source={Imagens.artistaMcSaci} style={styles.imgArtistas} />
              </View>
              <Text style={styles.textoArtistasFavoritos}>MC Saci</Text>
            </View>

            <View style={styles.artistasFavoritos}>
              <View style={styles.escutadas}>
                <Image source={Imagens.artistaMcPh} style={styles.imgArtistas} />
              </View>
              <Text style={styles.textoArtistasFavoritos}>MC PH</Text>
            </View>

            <View style={styles.artistasFavoritos}>
              <View style={styles.escutadas}>
                <Image source={Imagens.artistaMcRyan} style={styles.imgArtistas} />
              </View>
              <Text style={styles.textoArtistasFavoritos}>MC Ryan SP</Text>
            </View>



          </View>



        </ScrollView>





        <Text style={styles.titleSaudade}>Feito para Allan.</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerRecomendadas}>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.dailyBillie} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>



            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.dailyTravis} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>



            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.dailyEminem} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>



            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.dailyPostMalone} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>



            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.dailyKayneWest} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>



            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.dailySeiNao} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>



            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.myDiscover} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>



            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.myRadar} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
          </View>


        </ScrollView>



        <Text style={styles.titleSaudade}>Para acompanhar seu dia</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerRecomendadas}>
            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaAquarela} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>Clenton Rasta, ze da capitinga, Tiringa, jorge e Matheus</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaForro} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaSambalanço} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaAulas} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaCasaLimpa} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaPagodeira} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaTrap} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>

            <View style={styles.playlistEscutadas}>
              <View style={styles.escutadas}>
                <Image source={Imagens.diaExplode} style={styles.imgEscutadas} />
              </View>
              <Text style={styles.subTexto}>, Todos os maiores hits em uma só ...</Text>
            </View>
          </View>
        </ScrollView>


        <Text style={styles.titleSaudade}>Novos episódios</Text>
        <ScrollView
          horizontal={true}
          style={styles.containerSaudadeMusica}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerPodcast}>
            <View style={styles.podcast}>
              <View style={styles.EpPodcast}>
                <Image source={Imagens.podPaPodcast} style={styles.imgPodcast} />
                <Text style={styles.textoPodcast}>EDMÍLSON E KAKÁ - PodPah #784</Text>



              </View>
              <View style={styles.EpPodcast}>
                <Image source={Imagens.podPaPodcast} style={styles.imgPodcast} />
                <View style={styles.dentroPodcast}>
                  <Text style={styles.textoPodcast}>PERRENGUE NA BAND - PodPah #783</Text>
                  <Text style={styles.subTextoPodcast}>PERRENGUE NA BAND - Podpah</Text>


                  <View style={styles.iconsPodcast}>

                    <Button
                      style={ styles.rightButton}
                      isLoading={loading}
                      variant="noBorder"
                      title=""
                      iconName="pluscircleo"
                   
                      onPress={() => navigation.native('Home')}
                    />
                    <Button
                      style={ styles.leftButton}
                      isLoading={loading}
                      variant="noBorder"
                      title=""
                      
                      iconName3="caret-forward-circle-sharp"
                      onPress={() => navigation.native('Home')}
                    />
                    {/* <AntDesign name="pluscircleo" size={18} color="white" style={{ position: 'relative', right: width * 0.2 }} />
                    <Ionicons name="caret-forward-circle-sharp" size={23} color="white" style={{ position: 'relative', left: width * 0.23 }} /> */}
                  </View>
                </View>


              </View>
            
            </View>
            <View style={styles.podcast}>
              <View style={styles.EpPodcast}>
                <Image source={Imagens.podPaPodcast} style={styles.imgPodcast} />
                <View style={styles.dentroPodcast}>
                  <Text style={styles.textoPodcast}>XAMÃ - Podpah #782</Text>
                  <Text style={styles.subTextoPodcast}>XAMÃ - Podpah #782</Text>


                </View>


              </View>
              <View style={styles.EpPodcast}>
                <Image source={Imagens.podPaPodcast} style={styles.imgPodcast} />

                <View style={styles.dentroPodcast}>
                  <Text style={styles.textoPodcast}>CHIRISTIAN CHAVEZ - PodPah #781</Text>
                  <Text style={styles.subTextoPodcast}>CHIRISTIAN CHAVEZ - Podpah #781</Text>
                </View>


              </View>
            </View>

          </View>




        </ScrollView>




      </View>
    </ScrollView>
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
    backgroundColor: "#151515",
    flexDirection: 'column'
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
  containerPlaylists: {
    flexDirection: 'row'
  },

  minhaPlaylist: {
    width: width * 0.5,
    height: height * 0.4,
    marginTop: 15,


  },
  playlistColuna: {
    width: width * 0.46,
    height: height * 0.09,
    marginTop: 7,
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: '#413F42',
    flexDirection: 'column'

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

  minhaPlaylist1: {
    marginTop: 15,


  },

  playlistColuna1: {
    width: width * 0.46,
    height: height * 0.09,
    marginTop: 7,
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: '#413F42',
    flexDirection: 'column'

  },
  playlist1: {
    display: 'flex',
    justifyContent: 'center',



  },
  imgPlayList1: {
    display: 'flex',
    justifyContent: 'center',
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
  containerSaudadeMusica: {
    marginBottom: 30,
    flexDirection: 'row',
    width: width * 1,


  },
  containerRecomendadas: {
    flexDirection: 'row',
    width: width * 0.38,
  },
  titleSaudade: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
    marginBottom: 15,

  },
  playlistEscutadas: {

  },
  escutadas: {
    width: width * 0.35,
    height: height * 0.18,
    marginLeft: 8,
    marginRight: 5,

  },
  imgEscutadas: {
    width: width * 0.35,
    height: height * 0.18,

  },
  textoPlaylistEscutada: {
    fontSize: 11.5,
    fontWeight: '800',
    color: 'white',
    marginLeft: 8,
    width: width * 0.35,
    marginTop: 10,
  },
  subTexto: {
    fontSize: 9,
    fontWeight: '700',
    color: '#454545',
    marginLeft: 8,
    marginBottom: 30,
    width: width * 0.35,
  },
  containerTocados: {
    marginBottom: 30,
    flexDirection: 'row',
    width: width * 1,

  },
  imgTocadas: {
    width: width * 0.3,
    height: height * 0.17,
  },
  textoPlaylistTocadas: {
    fontSize: 11.5,
    fontWeight: '800',
    color: 'white',
    marginLeft: 8,
    width: width * 0.35,

  },
  playlistTocadas: {
    width: width * 0.3,
    height: height * 0.17,
    marginLeft: 10,
    marginBottom: 30,
  },
  containerAritistas: {
    marginBottom: 30,
    flexDirection: 'row',
    width: width * 1,

    display: 'flex',

  },
  artistasFavoritos: {
    width: width * 0.4,
    height: height * 0.25,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5

  },
  imgArtistas: {
    width: width * 0.38,
    height: height * 0.2,
    borderRadius: 100,


  },
  textoArtistasFavoritos: {
    fontSize: 11.5,
    fontWeight: '800',
    color: 'white',
    marginLeft: 8,
    width: width * 0.35,
    textAlign: 'center',
    marginTop: 25,
  },

  containerPodcast: {
    marginBottom: 100,
    flexDirection: 'row',
    width: width * 1,
    display: 'flex',
  },
  podcast: {
    flexDirection: 'column',
  },
  EpPodcast: {
    flexDirection: 'row',
    width: width * 0.9,
    height: height * 0.13,
    marginBottom: 12,
    marginLeft: 8,
  },
  dentroPodcast: {
    flexDirection: 'column',
    height: height * 0.14,
    display: 'flex',
    position: 'relative',
  },
  imgPodcast: {
    width: width * 0.23,
    height: height * 0.13,
    borderRadius: 10,
  },
  textoPodcast: {
    marginLeft: 8,
    fontSize: 11.5,
    fontWeight: '800',
    color: 'white',
    width: width * 0.55,
  },
  subTextoPodcast: {
    fontSize: 11,
    fontWeight: '700',
    color: '#454545',
    marginLeft: 12,
    marginTop: 10,
    width: width * 0.55,
  },
  iconsPodcast: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
 
  leftButton: {
    width: width * 0.15,
    height: height * 0.08,
    display:'flex',
    alignItems:'flex-end',
    position:'relative',
    left: width * 0.14
  },
  rightButton: {
    width: width * 0.15,
    height: height * 0.08,
    display:'flex',
    alignItems:'flex-end',
    position:'relative',
    right: width * 0.16

  },

});



export default App;
