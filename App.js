
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import All from './screens/All';
import Business from './screens/Business';
import Health from './screens/Health';
import Sport from './screens/Sports';
import Tech from './screens/Tech';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

export default function App() {
  return (

    
    
    <NavigationContainer  > 
      <Tab.Navigator screenOptions={{
  "tabBarActiveTintColor": "rgb(0,208,255)",
  "tabBarInactiveTintColor": "rgb(247,245,0)",
  "tabBarActiveBackgroundColor": " rgba(1,1,1,0.9)",
  "tabBarInactiveBackgroundColor": " rgba(1,1,1,0.9)",
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}
}>

        <Tab.Screen name="All" component={All}
              options={{headerShown:false,
                tabBarIcon: (props) => (
                  <Icon  name='home' color={props.color} />
                ),
              }} />

        <Tab.Screen name="Business" component={Business}
          options={{headerShown: false,
            tabBarIcon: (props) => (
              <Icon type='feather' name='dollar' color={props.color} />
            ),
          }} />

          <Tab.Screen name="Health" component={Health}
              options={{headerShown: false,
                tabBarIcon: (props) => (
                  <Icon  name='heart' color={props.color} />
                ),
              }} />
          <Tab.Screen 
                    name ="Sport" component={Sport} options={{headerShown: false,
                      tabBarIcon:(prop)=>(
                        <Icon type="ionicon" name ="soccer-ball-o" color={prop.color} />
                      )
                    }} />
            <Tab.Screen name ="Tech" component={Tech} options={{headerShown: false,
                    tabBarIcon: (prop)=>( <Icon type='Ionicon' name='fort-awesome' color={prop.color}/> )
                    }} />
       </Tab.Navigator>
              
        <StatusBar style="auto" />
          
      </NavigationContainer>
      
  );
}
