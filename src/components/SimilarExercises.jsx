import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader.jsx'
const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  

  return (
    <Box sx={{mt: {lg: '100px', xs: '0px'}}}>
        <Typography variant='h3' mb={2}>
        Exercises that target the same muscle group
        </Typography>
        <Stack direction='row' padding='2px' position='relative'>
          {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader/>}
        </Stack>
        <Typography variant='h3' mb={2} mt={4}>
        Exercises that use the same equipment
        </Typography>
        <Stack direction='row' padding='2px' position='relative'>
          {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/>}
        </Stack>
  
    </Box>
  )
}

export default SimilarExercises