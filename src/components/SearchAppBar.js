import * as React from "react"
import { styled } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import { Autocomplete } from "@mui/material"
import { useSelector } from "react-redux"
import { TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar)

export default function SearchAppBar() {
  const stateList = useSelector(state => state.states.value)
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            INDIAN TOURISM
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Autocomplete
            sx={{
              width: "25%",
              color: "white",
              bgcolor: "white",
              borderRadius: "10px",
            }}
            id="free-solo-demo"
            freeSolo
            onChange={(event, newValue) => {
              stateList.map(state => {
                if (state.name === newValue) {
                  navigate(`/states/${newValue}/places`)
                }
                return null
              })
            }}
            clearOnBlur
            options={stateList.map(state => state.name)}
            renderInput={params => (
              <TextField placeholder="Search..." {...params} />
            )}
          />
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  )
}
