# news_application


https://dev.to/abhishek_159/reactdomrender-is-no-longer-supported-in-react-18-1kac#:~:text=root')%2C%20)%3B-,To%20solve%20the%20error%2C%20create%20a%20root%20element%20and%20use,the%20div%20in%20your%20index.

if you get react 17 read index no good
this only relavent if using index.js in react


first attempt  use React native, expo, and NaitiveBase in this little project

configuarions 
1. npm --global expo-cli
2. expo init
3.npx expo start
        if not stalled react native do this 
        npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2

https://reactnavigation.org/

4.npx expo install react-native-screens react-native-safe-area-context
    UI to make it look pretty and  buttons, serach, arrows, etc
    - npm install @react-navigation/native
    - npm install @react-navigation/bottom-tabs

5. will get Error regarding and Setting Home Screen, make the folder


6. will need icons get them from react native elements
    -this is how to install
    npm install @rneui/base @rneui/themed


https://oblador.github.io/react-native-vector-icons/


5. install the natvie-base
        yarn add native-base
        expo install react-native-svg@12.1.1
        expo install react-native-safe-area-context@3.3.2


api key= 6939209d994449da9e9960174d61bf29

6. config folder
        will holds the api keys
        endpionts 
        and organize display



    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6939209d994449da9e9960174d61bf29')
    .then(r=> r.json())
    .then(d => console.log(d))

    Access-Control-Allow-Origin: *


    send to the app store by making an expo account and creating

    expo build:android

    fill credentails

    apk for install on device => generate keystore and source app 
    app-bundle to upload to app store