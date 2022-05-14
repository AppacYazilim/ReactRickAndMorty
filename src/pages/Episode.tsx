import { Box, CircularProgress, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CharacterComponent from '../components/CharacterComponent';
import config from '../config';
import useRickAndMortyEpisode from '../hooks/useRickAndMortyEpisode';

export default function Episode() {

  const { id } = useParams();

  const {
    data,
    isFetching,
  } = useRickAndMortyEpisode(`${config.API_URL}/episode/${id}`);
  return (
    <Box>

      <Typography gutterBottom variant="h5" component="div">
        {data?.name}
      </Typography>

      {isFetching && <CircularProgress />}


      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Typography variant="body1">
          Air Date: {data?.air_date}
        </Typography>
        <Typography variant="body1">
          {data?.episode}
        </Typography>
      </Box>



      <Typography variant="h5">
        Characters:
      </Typography>

      {data?.characters.map((character, i) => (
        <CharacterComponent key={i} url={character} />
      ))}

    </Box>
  )
}
