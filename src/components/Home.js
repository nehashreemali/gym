import React from 'react'
import Exercises from './Exercises'
import SearchExercises from './SearchExercises'
import HeroBanner from './HeroBanner'
import { Box } from '@mui/material'
const Home = () => {
  return (
    <Box>
    <HeroBanner/>
    <SearchExercises/>
    <Exercises/>
    </Box>
  )
}

export default Home