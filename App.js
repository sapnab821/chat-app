
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const Stack = createNativeStackNavigator();

const App = () => {

  const firebaseConfig = {
    // YOUR FIREBASE CONFIG INFO
  apiKey: "AIzaSyAkpuKa6Gob0OQ0xhuooy_xt84gAgXXuwA",
  authDomain: "chat-25e94.firebaseapp.com",
  projectId: "chat-25e94",
  storageBucket: "chat-25e94.appspot.com",
  messagingSenderId: "538664219135",
  appId: "1:538664219135:web:85823e7c4706740ae877ca"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat">
           {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;