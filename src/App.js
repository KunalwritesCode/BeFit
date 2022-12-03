import React from 'react'
import {Route , Routes} from 'react-router-dom';
import { Box } from '@mui/system';  
import styles from './styles.css'
import NavBar from './components/NavBar';
import Workout from './pages/Workout';
import Home from './pages/Home';
import Footer from './components/Footer';


const App = () => {
  return (
    <Box width="400px">
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Workout/id:' elements={<Workout />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App