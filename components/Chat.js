import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat, KeyboardAvoidingView, Bubble } from "react-native-gifted-chat";


const Chat = ({ route }) => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }
// text bubbles user sends
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

    const { name } = route.params;
    const {color} = route.params;
// messages that show up when user enters chat
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'you have entered the chat',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'This is a system message',
          createdAt: new Date(),
          system: true,
        },
      ]);
    }, []);



      return (
      //styles of texting screen
        <View style={[styles.container, { backgroundColor: color }]}>
  
     <Text style={styles.text}>Hi, {name}!</Text>
        <GiftedChat
          messages={messages}
          renderBubble={renderBubble}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1
          }}
        />
        {/* Keyboard avoiding view*/}
        { Platform.OS === 'iOS' ? <KeyboardAvoidingView behavior="padding" /> : null }
   </View>

      )
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