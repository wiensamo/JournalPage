import { checkingCredentials, login } from './'

export const checkingAutentication =( email, password )=>{ 
    return async( dispatch ) =>{
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn =()=>{
    return async( dispatch )=>{
        dispatch( checkingCredentials() );
    }
}