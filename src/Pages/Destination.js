import React from "react"
import { useParams } from "react-router-dom"
import { useSelector} from "react-redux"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export default function Destination() {
  const { place } = useParams()
  const placeList = useSelector(place => place.places.value)
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${
            placeList.find(item => item.name === place).image_url
            })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Typography sx={{ m: 2 }} variant="h4" gutterBottom>
        Welcome to {place.split("-")[0]}
      </Typography> */}
      <Paper>
        <Box p={2}>
          <Typography variant="h5" gutterBottom>
            Welcome to {place.split("-")[0]}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {placeList.map(item => {
              if (item.name === place) {
                return item.description
              }
              return null
            })}
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
