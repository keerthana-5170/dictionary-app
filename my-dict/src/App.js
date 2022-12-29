import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from "./theme"
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { React,Component } from 'react';
import Home from './components/Home'
import Definition from './components/Definition'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>Home</Route>
          <Route  path="/search/:word" element={<Definition/>}>Definition</Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App