import React, {useState, useRef} from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, Dimensions, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidith, height: screenHeight} = Dimensions.get('window')

export default function App() {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
        title:"O Justiceiro",
        text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
        release: 2018,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    },
    {
        title:"Bad Boys for life",
        text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    },
    {
        title:"Viúva Negra",
        text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    },
    {
        title:"Top Gun: MAVERICK",
        text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    },
    {
        title:"BloodShot",
        text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    },
    {
        title:"Free Guy",
        text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
  ]);

  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({item, index}) => {
    return(
      <View>
        <TouchableOpacity>
          <Image
              source={{uri: item.img}}
              style={styles.carouselImg} />
              <Text style={styles.carouselTxt}>{item.title}</Text>
              <Icon name="play-circle-outline" 
                    size={30} 
                    style={styles.carouselIcon} 
                    color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    );
  };

 return (
   <ScrollView style={styles.container}>
     <View style={{flex: 1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000000'}}>
          <ImageBackground
            source={{uri: background}}
            style={styles.imgBg}
            blurRadius={4}
          >

            <View style={styles.viewTouch}>
              <TextInput style={styles.input} placeholder="Procurando algo?" />
                <TouchableOpacity style={styles.icon}>
                  <Icon name="search" color="#000000" size={25} />
                </TouchableOpacity>
            </View>

            <Text style={{color: '#FFFFFF', fontSize: 28, fontWeight: 'bold', marginLeft: 12, marginVertical: 10}}>
              Lançamentos
            </Text>

            <View style={styles.slideView}>
              <Carousel style={styles.carousel}
                        ref={carouselRef}
                        data={lista}
                        renderItem={_renderItem}
                        sliderWidth={screenWidith}
                        itemWidth={200}
                        inactiveSlideOpacity={0.5}
                        onSnapToItem={(index) => {
                            setBackground(lista[index].img);
                            setActiveIndex(index);
                        }}
                         />
            </View>

            <View style={styles.moreInfo}>
              <View style={{marginTop: 10}}>
                <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
              <Icon name="queue" color="#131313" size={30} style={{marginRight: 15, marginTop: 10}} />
            </View>

          </ImageBackground>
        </View>
     </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000000'
  },
  viewTouch: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input: {
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 12
  },
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    flex: 1,
    overflow: 'visible'
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselTxt: {
    padding: 15,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  moreInfo: {
    backgroundColor: '#FFFFFF',
    width: screenWidith,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  movieTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5
  },
  movieDesc: {
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8
  }
})