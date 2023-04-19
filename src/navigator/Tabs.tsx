import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';

import { StackNavigator } from './StackNavigator';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios'
            ? <TabsIOS />
            : <TabsAndroid />
}


const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <TabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={ {
            backgroundColor: colores.primary
         } }
         screenOptions={ ( {route} ) => ({
            tabBarActiveTintColor: colores.primary,
            headerTintColor: 'red',
            tabBarStyle: {
                borderTopColor: 'red',
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            
            tabBarIcon: ( { color, focused } ) => {
                let iconName: string = '';

                switch(route.name) {
                    case 'Tab1Screen' :
                        iconName= 'apps-outline'
                        break;
                    case 'Tab2Screen' :
                        iconName= 'chatbubbles-outline'
                        break;
                    case 'StackNavigator' :
                        iconName= 'logo-stackoverflow'
                        break;
                
                }
                return <Icon name={iconName} size={24} color={color} />
            }
        })}
    >
      <TabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1' }} component={ Tab1Screen } />
      <TabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2' }} component={ TopTabNavigator } />
      <TabAndroid.Screen name="StackNavigator" options={{title: 'Stack' }} component={ StackNavigator } />
    </TabAndroid.Navigator>
  );
}

const TabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <TabIOS.Navigator
        sceneContainerStyle={ { 
            backgroundColor: 'white',
         } }

        screenOptions={ ( {route} ) => ({
            tabBarActiveTintColor: colores.primary,
            headerTintColor: 'red',
            tabBarStyle: {
                borderTopColor: 'red',
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            
            tabBarIcon: ( { color, focused, size } ) => {
                let iconName: string = '';

                switch(route.name) {
                    case 'Tab1Screen' :
                        iconName= 'T1'
                        break;
                    case 'Tab2Screen' :
                        iconName= 'T2'
                        break;
                    case 'StackNavigator' :
                        iconName= 'ST'
                        break;
                
                }
                return <Text style={ {color} }>{ iconName }</Text>
            }
        })}

    >
      <TabIOS.Screen name="Tab1Screen" options={{title: 'Tab1' }} component={ Tab1Screen } />
      <TabIOS.Screen name="Tab2Screen" options={{title: 'Tab2' }} component={ TopTabNavigator } />
      <TabIOS.Screen name="StackNavigator" options={{title: 'Stack' }} component={ StackNavigator } />

    </TabIOS.Navigator>
  );
}