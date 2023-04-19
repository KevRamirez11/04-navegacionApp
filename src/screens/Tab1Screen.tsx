import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
// import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect( () => {

  }, []);

  return (
    <View 
      style={{
        ...styles.globalMargin,
        marginTop: top + 10
      }}
    >
        <Text style={styles.title}> Iconos </Text>
        <Text>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="heart-outline"/>
          <TouchableIcon iconName="bicycle-outline"/>
          <TouchableIcon iconName="beer-outline"/>
          <TouchableIcon iconName="magnet-outline"/>
          <TouchableIcon iconName="fast-food-outline"/>
          <TouchableIcon iconName="hardware-chip-outline"/>
        </Text>
    </View>
  )
}
