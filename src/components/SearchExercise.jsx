import React,{useEffect, useState} from 'react'
import { Box , Button , Stack , TextField, Typography} from '@mui/material'

const SearchExercise = () => {
  return (
    <div>
      <Stack alignItems= "center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb="50px" textAlign="center">
           Choose from my favourites
        </Typography>
        
      </Stack>
    </div>
  )
}

export default SearchExercise
