import { Box, CircularProgress, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import useRickAndMortyEpisodes from './../hooks/useRickAndMortyEpisodes'


export default function Episodes() {

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useRickAndMortyEpisodes();


  return (
    <Box>
      <Typography gutterBottom variant="h5" component="div">
        Rick and Morty Episodes
      </Typography>

      {isFetching && <CircularProgress />}

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map(episode => (
              <ListItemButton key={episode.id} component={Link} to={`/episodes/${episode.id}`} disabled={isFetchingNextPage}>
                <ListItemText primary={`${episode.episode} ${episode.name}`} secondary={`Air Date: ${episode.air_date}`} />
              </ListItemButton>
            ))}
          </React.Fragment>
        ))}
        {
          hasNextPage && (
            <ListItemButton onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
              <ListItemText primary="Load more" />
            </ListItemButton>
          )
        }
      </List>
    </Box>
  )
}
