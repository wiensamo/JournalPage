import { singInWithGoogle } from '../../firebase/provider';
import { checkingCredentials, login, logout } from './'

export const checkingAutentication =( email, password )=>{ 
    return async( dispatch ) =>{
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn =()=>{
    return async( dispatch )=>{

        dispatch( checkingCredentials() );
        
        const result = await singInWithGoogle();
        
        if (!result.ok) return dispatch(logout(result.errorMessage));  

        dispatch( login( result ) );
    }
}