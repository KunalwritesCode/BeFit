import React from 'react'

import { Button } from '@mui/material';
import { Box, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/Banner.jpg';



const HeroBanner = () => (
 
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    
        <Typography color="#860EC4" fontWeight ="800" fontSize= "26px">
            The Evolution Club
        </Typography> 
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" >
          Eat, Sleep, Evolve<br /> 
          And Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" fontFamily="roboto">
            Check out My Personal recommendation
        </Typography>
        <Button variant='contained' color='secondary'>OverHere</Button>
        
    <Typography fontWeight={600} color="#78349B" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Evolve 
      </Typography>  
      <img src={HeroBannerImage} alt='Banner' className='hero-banner-img' />
     
    </Box>
    
  
);

export default HeroBanner;