import { display } from '@mui/system'
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'no-authenticated', // no-authenticated -checking- autenticator
    uId: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: ( state, { payload } ) => {
        state.status = 'authenticated', // no-authenticated -checking- autenticator
        state.uId = payload.uId;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.errorMessage = null;
    },
    logout: ( state, { payload } )=>{
        state.status = 'no-authenticated', // no-authenticated -checking- autenticator
        state.uId = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state)=>{
      state.status = 'checking'      
    },
},
})

export const { login, logout, checkingCredentials } = authSlice.actions
export default authSlice.reducer