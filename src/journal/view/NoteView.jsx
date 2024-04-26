import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
    //se puede sacar la fecha en un useDate o un custom hook para que de la fecha y el pormato  que quiera
    const date = new Date();
    const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    ];
    
  return (
    <Grid container direction='row' justifyContent='space-between'  alignItems='center' sx={{ mb: 1}}>
        <Grid item>
            <Typography  fontSize={ 39 } fontWeight='light' >Mes: {month} dia: {day} del año: {year}</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30, mr:1}}/>
                Save
            </Button>
        </Grid>
        <Grid container>    
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese Titulo de la actividad"
                label="Titulo"
                sx={{ border:'none', mb:1}}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Que Activdad realizaste hoy?"
                
                minRows={5}
            />
        </Grid>
        <ImageGalery/>
    </Grid>
  )
}
