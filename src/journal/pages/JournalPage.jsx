import { IconButton, Typography } from '@mui/material'
import { AddOutlined, MailOutline } from '@mui/icons-material'
import { JournalLayout } from '../layouts/JournalLayout'
import { NoteView, NothingSelectedView } from '../view'



export const JournalPage = () => {
  return (
   <JournalLayout >
     {/* <Typography >Frease para validar un textowqiheroiwh qwerng eiurweijrq wrqwrhtbqwrjht qwjrtq tqtqwbhrtbñhqwbrtqbw rlt bqwrltbq rwehktb qlkrbt lqwrb tq wrt q</Typography> */}
     {/* <NothingSelectedView /> */}
     <NoteView />
     <IconButton 
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50,
        alignItems:'center'
      }}
     >
      <AddOutlined sx={{ fontSize: 30 }} />
     </IconButton>
   </JournalLayout>
  )
}
