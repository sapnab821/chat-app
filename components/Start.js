import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const startChat = () => {
    navigation.navigate("Chat", {
      name: name,
      color: color,
    });
  }

  return (
   // image background, and style for container
    <ImageBackground source={require('./BackgroundImage.png')} resizeMode="cover" style={[styles.image, styles.container]}>
      
      {/* chat app text and styles */}
        <Text style={styles.Text}>Chat App</Text>
        

        {/* mainbox */}
        <View style={styles.mainBox}>
          {/* input for user's name */}
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='your name'
        />
        
        <Text style={styles.backgroundText}>Choose Background Color</Text>
        <View></View>
        {/* Color selectors for background colors. */}
        <View style={styles.color}>
          <TouchableOpacity style={[styles.colorButton, styles.color1]} onPress={() => {
            setColor(styles.color1.backgroundColor)
          }}></TouchableOpacity>
          <TouchableOpacity style={[styles.colorButton, styles.color2]} onPress={() => {
            setColor(styles.color2.backgroundColor);
          }}></TouchableOpacity>
          <TouchableOpacity style={[styles.colorButton, styles.color3]} onPress={() => {
            setColor(styles.color3.backgroundColor);
          }}></TouchableOpacity>
          <TouchableOpacity style={[styles.colorButton, styles.color4]} onPress={() => {
            setColor(styles.color4.backgroundColor);
          }}></TouchableOpacity>
        </View>
          {/* Submit button*/}
        <TouchableOpacity style={styles.button} onPress={startChat}>
          <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
       
      
      </View>
      {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  image: {
    
    flex: 1,
    justifyContent: "center"
    
    
  },

  mainBox: {

    height: "44%",
    width: "88%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  Text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: "#FFFFFF"
  },
  backgroundText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: "#757083",
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    borderWidth: 1,
    padding: 15,
    margin: 10,
    marginTop: 20,
    borderColor: 'black',
    fontSize: 16,
    fontWeight: '600',
    color: '#757083',
  },

  color: {
    justifyContent: "center",
    width: 350,
    height: 100,
    flexDirection: "row"
  },
  colorButton: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,

  },
  color1: {
    backgroundColor: "#090C08"
  },
  color2: {
    backgroundColor: "#474056"
  },
  color3: {
    backgroundColor: "#8A95A5"
  },
  color4: {
    backgroundColor: "#B9C6AE"
  },

  button: {
    backgroundColor: "#757083",
    width: "88%",
    alignItems: "center",
    margin: 20,
    padding: 20
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Start;