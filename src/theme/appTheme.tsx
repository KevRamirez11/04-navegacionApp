import { StyleSheet } from "react-native";

export const colores = {
    primary: 'green'
}

export const styles = StyleSheet.create( {
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        // color: 'white'
    },
    botonGrande:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white'
    },
    avatarContainer: {
      alignItems: 'center',
      marginTop: 10 
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        // alignItems: 'center'
    },
    menuBoton: {
        marginVertical: 8
    },
    menuTexto: {
        fontSize: 22
    },
    
} );