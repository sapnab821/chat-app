Objective

The objective was to build a chat-app for mobile devices using React Native.
The app provides users with a chat interface and options to choose background color, and while chatting: to share images from library, to take a picture to send, and to send geolocation from a phone as well as the Android Simulator.

Features
Select the background color from four options
Sign-in and anonymous authentication with a username
Sending/receiving messages in real-time
Image and location sharing
Taking a pic from app to send in chat
Offline viewing of cashed messages

Technologies used:
React Native
Expo
Google Firebase and Storage
AsyncStorage cashing for offline usage
Gifted Chat Library

Directions for setting up the environment:
Install Node JS on your device
In the terminal: Install Expo globally: npm install -g expo-cli
Sign up for an Expo Account to be able to run the app on your device
Run npm install in the chat folder
Use your own Firebase configuration code:
Sign in at Google Firebase
Create a Project (uncheck Enable Google Analytics for this project)
Create Database in Firestore Database (choose a close region from the dropdown, and Start in production mode)
Change allow read, write: if false; to allow read, write, true; in Rules tab
Register app(</>) in Project Overview
Now, follow the provided directions of adding Firebase SDK:
Install firebase: npm install firebase
Initialize firebase: Copy and paste the provided Firebase configuration and change them in the App.js of the downloaded repository
Download Android Studio(Win) or iOS Simulator/XCode(Mac)
Run expo start in the terminal. Follow the instruction to access the app via the iOS Simulator/Android Emulator.
