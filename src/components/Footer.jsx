import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/footerLogo.png'

const Footer = () => {
  return (
    <Box mt='80px'>
      <Stack gap='20px' alignItems='center' px='40px' pt='24px' direction='row' justifyContent='center'>
       <Typography variant='h5'>
       Exercise Database
        </Typography> 
       <img src={Logo} alt='logo' height='40px'/>
      </Stack>
    </Box>
  )
}

export default Footer