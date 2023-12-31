import React from 'react'
import { Stack, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => {

 
  return (
    <Stack direction='row' alignItem='center' p={2} sx={{position:'sticky', background:'#000', top:0, justifyContent:'space-between'}}>

      <Link to='/' style={{display:'flex', alignItems:'center'}}>
          <img src={logo} alt='logo' height={25}/>

          <Typography variant='h6' color='white' fontWeight='700' ml={2} sx={{ display: { xs: 'none', md: 'block' } }} >
            Rk-Media
          </Typography>
          
      </Link>
        {/* search bar component  */}
      <SearchBar />
    
    </Stack>
  )
}
 export default Navbar;