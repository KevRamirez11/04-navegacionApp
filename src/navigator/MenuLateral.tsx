import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="SettingsScreen"
//         component={ SettingsScreen }
//       />
//     </Stack.Navigator>
//   )
// }


export const MenuLateral = () => {

  

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno { ...props }/> }
    >
      <Drawer.Screen name="Tabs"  component={ Tabs } />
      <Drawer.Screen name="SettingsScreen"  component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}


const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {

  return (

    /* Parte del avatar */
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View 
        style={ styles.avatarContainer }
      >
        <Image 
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
          }}
          style={ styles.avatar }
        />
      </View>


      {/* Opciones de menu */}
      <View style= { styles.menuContainer }>
          
          <TouchableOpacity 
              style={{
                ...styles.menuBoton,
                flexDirection: 'row',
                }}
              onPress={ () => navigation.navigate('Tabs') }
          >
            <Icon name= 'compass-outline' size={28} color= 'black' />
            <Text style={styles.menuTexto} > Navegacion Tabs</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={{
                ...styles.menuBoton,
                flexDirection: 'row',
                }}
              onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Icon name= 'cog-outline' size={28} color= 'black' />
            <Text style={styles.menuTexto} > Ajustes</Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

    


  );
}