import React from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { placeSlice } from "../features/PlacesReducer"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"

export default function TouristPlaces() {
  const { state } = useParams()
  const dispatch = useDispatch()
  const stateList = useSelector(state => state.states.value)
  const placeList = useSelector(place => place.places.value)
  const navigate = useNavigate()

  React.useEffect(() => {
    stateList.map(item => {
      if (item.name === state) {
        fetch(
          `https://indian-tourism-api.herokuapp.com/states/${item.state_id}/places`
        )
          .then(res => res.json())
          .then(data => {
            console.log("hook", data)
            //setStatesData(data);
            //dispatch(stateSlice.actions.setStates(data));
            dispatch(placeSlice.actions.setPlaces(data))
          })
          .catch(err => console.log(err))
      }
      return null
    })
  }, [stateList, state, dispatch])

  console.log("placelist", placeList)

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#f5f5f5",
      }}
    >
      <Typography sx={{ m: 2 }} variant="h4" gutterBottom>
        Tourist Places in {state}
      </Typography>
      <Grid
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        container
        spacing={3}
      >
        {placeList.map(item => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.place_id}>
            <Card>
              <CardActionArea onClick={() => navigate(`/states/${state}/places/${item.name}`)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image_url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name.split("-")[0]}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
