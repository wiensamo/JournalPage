import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { pupleTheme } from './';

export const AppTheme = ({ children }) => {
  return (
        <ThemeProvider theme={ pupleTheme }>
             {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            { children }
         </ThemeProvider>
  )
}
