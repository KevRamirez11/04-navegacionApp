import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<any,any> {};

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions( { 
      title: 'Hola mundo!',
      headerBackTitle: 'Atras'
    } )
  }, []);

  return (
    <View style= {styles.globalMargin }>
        <Text style = { styles.title }>Pagina2Screen</Text>
        <Button 
            title='Ir pagina 3'
            onPress={ () => navigator.navigate('Pagina3Screen') }
        ></Button>
    </View>
  )
}
