Objective<br>
The objective was to build a chat-app for mobile devices using React Native.<br>
The app provides users with a chat interface and options to choose background color, and while chatting: to share images from library, to take a picture to send, and to send geolocation from a phone as well as the Android Simulator.<br>

Features<br>
Select the background color from four options<br>
Sign-in and anonymous authentication with a username<br>
Sending/receiving messages in real-time<br>
Image and location sharing<br>
Taking a pic from app to send in chat<br>
Offline viewing of cashed messages

Technologies used:<br>
React Native<br>
Expo<br>
Google Firebase and Storage<br>
AsyncStorage cashing for offline usage<br>
Gifted Chat Library

Directions for setting up the environment:<br>
Install Node JS on your device<br>
In the terminal: Install Expo globally: npm install -g expo-cli<br>
Sign up for an Expo Account to be able to run the app on your device<br>
Run npm install in the chat folder<br>
Use your own Firebase configuration code:<br>
Sign in at Google Firebase<br>
Create a Project (uncheck Enable Google Analytics for this project)<br>
Create Database in Firestore Database (choose a close region from the dropdown, and Start in production mode)<br>
Change allow read, write: if false; to allow read, write, true; in Rules tab<br>
Register app(</>) in Project Overview<br>
Now, follow the provided directions of adding Firebase SDK:<br>
Install firebase: npm install firebase<br>
Initialize firebase: Copy and paste the provided Firebase configuration and change them in the App.js of the downloaded repository<br>
Download Android Studio(Win) or iOS Simulator/XCode(Mac)<br>
Run expo start in the terminal. Follow the instruction to access the app via the iOS Simulator/Android Emulator.<br>
