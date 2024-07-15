import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat, KeyboardAvoidingView, Bubble, InputToolbar } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomActions from './CustomActions';
import MapView from 'react-native-maps';
import { Platform } from 'react-native';



const Chat = ({ db, route, navigation, isConnected, storage }) => {

  const { userID } = route.params;
  const { name } = route.params;
  const { color } = route.params;

  const [messages, setMessages] = useState([]);


  let unsubMessages;
  useEffect(() => {
    if (isConnected === true) {
      navigation.setOptions({ title: name });
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      unsubMessages = onSnapshot(q, (docs) => {
        let newMessages = [];
        docs.forEach(doc => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis())
          })
        })
        cacheMessages(newMessages)
        setMessages(newMessages);
      });
    } else loadCachedMessages()

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
      unsubMessages = null;
    }
  }, [isConnected]);

  // toolbar from which user can send images, take images, send location data, or cancel 
  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  }

  // cache the messages to be retrieved if connection lost
  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
    } catch (error) {
      console.log(error.message);
    }
  }

  // load the cached messages when called. 
  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem("messages") || [];
    setMessages(JSON.parse(cachedMessages));
  }

  // send message to database and updates the message
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
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

  // the custom actions of images and location for user
  const renderCustomActions = (props) => {
    return <CustomActions
      userID={userID}
      storage={storage}
      {...props}

    />
  }
  // message bubble with location data 
  const renderCustomView = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={{
            width: 150,
            height: 100,
            borderRadius: 13,
            margin: 3
          }}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
    return null;
  }
  return (
    //styles of texting screen
    <View style={[styles.container, { backgroundColor: color }]}>

      <Text style={styles.text}>Hi, {name}!</Text>

      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderActions={renderCustomActions}
        renderInputToolbar={renderInputToolbar}
        renderCustomView={renderCustomView}
        onSend={messages => onSend(messages)}
        user={{
          _id: userID,
          name: name
        }}

      />

      {/* Keyboard avoiding view*/}
      {Platform.OS === 'iOS' ? <KeyboardAvoidingView behavior="padding" /> : null}

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

