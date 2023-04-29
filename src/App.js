import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import { useMemo } from 'react';
import { themeSettings } from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Summary from './pages/Summary';
import { Toaster } from 'react-hot-toast'
import Paragraph from './pages/Paragraph'
import ChatBot from './pages/ChatBot'
import JsConverter from './pages/JsConverter'
import Scifi from './pages/Scifi'




function App() {
  const theme = useMemo(() => createTheme(themeSettings(),[]))
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/paragraph' element={<Paragraph />} />
          <Route path='/chatbot' element={<ChatBot />} />
          <Route path='/js-converter' element={<JsConverter />} />
          <Route path='/scifi-image' element={<Scifi />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
