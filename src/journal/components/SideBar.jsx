import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth=240}) => {
  return (
    <Box 
        component='nav'
        sx={{ width:{ sm: drawerWidth }, flexShrink:{ sm: 0 } }}
    >
        <Drawer
        // aca se debe poner el responsive del menu lateral
            variant='permanent'//temprorary
            open
            sx={{ 
                display: {xs:'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width:drawerWidth}    
            }}
        >
            <Toolbar>
                <Typography variant='h6'  noWrap component='div'>
                    Wilson Sanchez
                </Typography>
            </Toolbar>
            <Divider />
            <List >
                { 
                    ['Enero','Febrero','Marzo','Abril', 'Mayo'].map( text =>(
                        <ListItem key={ text } disablePadding>
                            <ListItemButton >
                                <ListItemIcon >
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'q+polkgQKLGL´K   35ITGHO *g+po   wedgp'} />

                                </Grid>
                            </ListItemButton>
                        </ListItem>)) 
                }
            </List>

        </Drawer>
    </Box>
  )
}
