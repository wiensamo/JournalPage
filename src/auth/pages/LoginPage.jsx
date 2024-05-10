import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { checkingAutentication, startGoogleSingIn } from '../../store/auth';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const {email, password, onInputChange, formState} = useForm({
    email: 'wilson@corre.com',
    password: 'abc123',
  });


  const onSuibmit =( event )=>{
    event.preventDefault();
    dispatch(checkingAutentication())
    console.log(email, password)
  }

  const onGoogleSingIn =(  )=>{
    console.log('boton de google')
    dispatch(startGoogleSingIn())
  }

  return (
   <AuthLayout title='Login'>
    <form onSubmit={onSuibmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Correo" 
                type='email'
                placeholder='Correo@google.com'
                fullWidth
                name="email"
                value={email}
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type='password'
                placeholder='Contraseña'
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2, mt:1}}>
              <Grid item xs={12} sm={ 6 }>
                <Button  type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={ 6 }>
                <Button 
                  variant='contained'
                  fullWidth 
                  onClick={ onGoogleSingIn }
                   >
                  <Google />
                  <Typography  sx={{ml:2}}>
                    Google
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register"> 
                Crear Cuenta
              </Link>
             
            </Grid>

          </Grid>
        </form>
   </AuthLayout>
  )
}
