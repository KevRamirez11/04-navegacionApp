import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext, AuthState } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { singIn, authState: { isLoggedIn } } = useContext(AuthContext);

  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}> Contacs </Text>

        {
          !isLoggedIn && <Button title='SignIn' onPress={ singIn } />
        }

    </View>
  )
}
