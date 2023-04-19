import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext, AuthState } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { logOut, authState: { isLoggedIn } } = useContext(AuthContext);

  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}> Albums </Text>

        {
          isLoggedIn && <Button title='Logout' onPress={ logOut } />
        }

    </View>
  )
}
