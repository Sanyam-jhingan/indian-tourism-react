import React from "react"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { stateSlice } from "../features/StatesReducer";
import { useNavigate } from 'react-router-dom';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

export default function States() {
  const dispatch = useDispatch();
  //const [statesData, setStatesData] = React.useState([]);
  const stateList = useSelector(state => state.states.value);
  const navigate = useNavigate();
  //console.log('statelist',stateList);

  React.useEffect(() => {
    fetch("https://indian-tourism-api.herokuapp.com/states", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        //console.log('hook',data)
        //setStatesData(data);
        dispatch(stateSlice.actions.setStates(data));
      })
      .catch(err => console.log(err))
  }, [dispatch])

  // const images = stateList.map(item => {
  //     return {
  //         url : item.image_url,
  //         title : item.name,
  //         width : "50%",
  //     }
  // })

  // console.log('images',images)

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    {stateList.map((state) => (
      <ImageButton
        focusRipple
        key={state.name}
        style={{
          width: "50%",
        }}
        onClick={() => 
          navigate(`/states/${state.name}/places`)}
      >
        <ImageSrc style={{ backgroundImage: `url(${state.image_url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {state.name}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
    ))}
  </Box>
  )
}
