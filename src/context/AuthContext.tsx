
import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

// Definir como luce, o que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Se usara para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    singIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps);

// Componente que es el proovedor del estado
export const AuthProvider = ( { children }: any ) => {

    const [authState, dispatch] = useReducer(AuthReducer, authInitialState)
    
    const singIn = () => {
        dispatch( {type: 'signIn'} )
    }

    const logOut = () => {
        dispatch( {type: 'logOut'} )
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeIcon', payload: iconName})
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }
    return (
        <AuthContext.Provider value={{
            authState,
            singIn,
            logOut,
            changeFavoriteIcon,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}
