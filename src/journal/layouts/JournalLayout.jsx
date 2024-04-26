import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';
import { Toolbar } from '@mui/material';

const drawerWidth= 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{display:'flex'}}>
        {/*NavBar drawerWidth*/}
        <NavBar drawerWidth={drawerWidth}/>
        {/**siderbar drawerWiodth */}
        <SideBar />
        <Box 
            component='main'
            sx={{flexGrow:1, p: 4 }}
        >
            {/**toolBar */}
            <Toolbar />
            {children}

        </Box>
    </Box>
  )
}
