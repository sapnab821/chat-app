import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';


const Start = ({ navigation }) => {
    const [name, setName]= useState('');
    const [color, setColor] = useState('');
  
    const startChat = () => {
      navigation.navigate("Chat", {
        name: name,
        color: color,
       
      });
      
    }

 return (
   <View style={styles.container}>
    <ImageBackground source={require('./BackgroundImage.png')} resizeMode="cover" style={styles.image}>
    
     <View style={styles.container2}>
     
     <View style= {styles.box1}>
     <Text style={styles.Text}>Chat App</Text>
     </View>
    
    <View style={styles.box2}>
    <View style={styles.container3}>
    
     <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='your name'
      />
      </View>
        <Text style={styles.backgroundText}>Choose Background Color</Text>
        <View></View>
        <Text></Text>
      <View style={styles.color}>
      <TouchableOpacity style={[styles.colorButton, styles.color1]} onPress={() => {
      setColor(styles.color1.backgroundColor)}}></TouchableOpacity>
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
        
        <TouchableOpacity style={styles.button} onPress={startChat}>
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
          </View>
     </View>
     <View style={styles.box3}></View>
      </ImageBackground>
   </View>
   
 );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
      },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
      box1: {
        
        justifyContent: "center",
        flex:2
      },
      box2: {
        
        flex:1.8,
        backgroundColor: "white",
        width: "88%",
        height: "44%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
      box3:{
        flex:0.05
      },
    Text : {
      textAlign: "center",
      justifyContent: 'center',
      fontSize: 45, 
      fontWeight: 600, 
      color: "#FFFFFF"
    },
    backgroundText: {
      fontSize: 16, 
      fontWeight: 300, 
      color: "#757083", 
      
    },
    container3: {
      flexDirection: "row",
      padding: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    icon:{
      height:50,
      width:50
    },
    textInput: {
        flex: 1,
        justifyContent: "center",
        width: "88%",
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15
      },
      image: {
        width:"100%",
        height:"100%"
      },
      color: {
        justifyContent: "space-around",
        width:350,
        height:100,
        flexDirection: "row"
      },
      colorButton:{
        width: 50,
        height: 50,
        borderRadius: "50%",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: "5px",
      },
      color1:{
        backgroundColor: "#090C08"
      },
      color2:{
        backgroundColor: "#474056"
      },
      color3:{
        backgroundColor: "#8A95A5"
      },
      color4:{
        backgroundColor: "#B9C6AE"
      },
      colorPress: {
     
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: "5px",
        
      },
      button: {
        
        backgroundColor: "#757083",
        width: "88%",
        alignItems: "center",
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
      },
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
      },
   });
   
   export default Start;