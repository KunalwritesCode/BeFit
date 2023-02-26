import React, {useState} from 'react';
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import Exercise from '../components/Exercise';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercise />

    </Box>
  )
}

export default Home;
