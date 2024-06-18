import { Text, View , Image, StyleSheet, ScrollView} from 'react-native';
import { Link } from 'expo-router';
import data from "../../assets/data/demo"
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Page() {
    return (
    <ScrollView style={{height: 10}}>
<View>
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text>{item.name}</Text>
            <Image source={item.image} style={styles.image} />
            <Text>{item.description}</Text>
            <Text>{item.message}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
      
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      marginBottom: 10,
    },
    image: {
      width: 100,
      height: 100,
    },
  });