import { Avatar, CircularProgress, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import useRickAndMortyCharacter from '../hooks/useRickAndMortyCharacter'

interface CharacterComponentProps {
  url: string
}

export default function CharacterComponent(props: CharacterComponentProps) {

  const { url } = props;

  const {
    data,
    isFetching,
    status
  } = useRickAndMortyCharacter(url)


  if(status !== 'success') {
    return <CircularProgress />
  }

  
  return (
    <ListItemButton component={Link} to={`/characters/${data.id}`}>
      <ListItemAvatar >
      <Avatar alt={data.name} src={data.image}/>
      </ListItemAvatar>
      <ListItemText primary={data.name} secondary={`Type: ${data.type}, Status: ${data.status}`} />
    </ListItemButton>
  )
}
