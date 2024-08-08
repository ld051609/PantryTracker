import SearchComponent from '@/components/Search'
import React from 'react'
import List from '@/components/List'
import { TextField, IconButton, InputAdornment, Container, Box, Typography } from '@mui/material';

const page = () => {
  const items = [
    { itemName: 'Apples', itemNumbers: 10 },
    { itemName: 'Oranges', itemNumbers: 5 },
    { itemName: 'Bananas', itemNumbers: 7 },
  ];
  return (
    <div>
      <Typography variant='h2' textAlign={'center'} marginY={5} fontWeight={'bold'} color={'tomato'}>
          Pantry Tracker
      </Typography>
      <SearchComponent />
      <List items={items}/>
    </div>
  )
}

export default page