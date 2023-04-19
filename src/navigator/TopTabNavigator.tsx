import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenContainer } from 'react-native-screens';
import { processColor } from 'react-native-reanimated';
import { colores } from '../theme/appTheme';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{ paddingTop: top }}
        sceneContainerStyle= {{backgroundColor: 'white'}}
        screenOptions={({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle:{
                elevation: 0
            },
            tabBarIcon:({color}) => {
                let iconName: string = '';
                switch(route.name) {
                    case 'ChatScreen':
                        iconName = 'chatbubble-ellipses-outline'
                        break;
                    case 'ContactsScreen':
                        iconName = 'people-outline'
                        break;
                    case 'AlbumsScreen':
                        iconName = 'albums-outline'
                        break;
                }
                return <Icon name={iconName} size={24} color={color} />
            }
        })}
    >
      <Tab.Screen name="ChatScreen" options={{title: 'Chat' }} component={ ChatScreen } />
      <Tab.Screen name="ContactsScreen" options={{title: 'Contacs' }} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title: 'Albums' }} component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}