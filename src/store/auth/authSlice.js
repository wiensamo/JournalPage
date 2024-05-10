import { display } from '@mui/system'
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'no-authentuication', // no-authentuication -checking- autenticator
    uId: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: ( state, action ) => {
      
    },
    logout: ( state, payload )=>{

    },
    checkingCredentials: (state)=>{
      state.status = 'checking'
    },
},
})

export const { login, logout, checkingCredentials } = authSlice.actions
export default authSlice.reducer