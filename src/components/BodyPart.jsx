import { Stack, Typography } from '@mui/material'
import React from 'react'

import muscleImages from '../assets/utils/Icons'



const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
    sx={
      {
        borderTop:  bodyPart === item ?'4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
    }}
    >
      <img src={muscleImages[item]} alt='gym' style={{width: '50px', height: '50px'}}/>
      <Typography 
      fontSize='24px' 
      fontWeight='bold'
      textTransform='capitalize'
      color='#3a1212'
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart