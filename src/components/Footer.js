import React from 'react'
import { Box, Typography} from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Made by
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
           Made by Sanyam Jhingan
        </Typography>
      </Box>
  )
}
