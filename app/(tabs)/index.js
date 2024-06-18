import { Text, View , Image, StyleSheet, ScrollView, Button} from 'react-native';
import { Link } from 'expo-router';
import data from "../../assets/data/demo"
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper'



export default function Page() {
    return (
        <View>
            <Swiper
            style= {styles.container}
                cards={data}
                renderCard={(card) => {
                    return (
                        <View key={card.id} style={styles.card}>
                            <Text>{card.name}</Text>
                            <Image source={card.image} style={styles.image} />
                            <Text>{card.description}</Text>
                            <Text>{card.message}</Text>
                        </View>
                    )
                }}
                onSwiped={(cardIndex) => {console.log(cardIndex)}}
                onSwipedAll={() => {console.log('onSwipedAll')}}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                stackSize= {3}>
               
            </Swiper>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
  });