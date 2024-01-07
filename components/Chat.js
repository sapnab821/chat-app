import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Chat = ({ route, navigation}) => {

    const { name } = route.params;
    const {color} = route.params;

    useEffect(() => {
        navigation.setOptions({ title: name });
      }, []);

 return (
  <View style={[styles.container, { backgroundColor: color }]}>
  
     <Text style={styles.text}>{name}</Text>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});

export default Chat;