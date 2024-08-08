'use client'
import SearchComponent from '@/components/Search';
import React, { useEffect } from 'react';
import List from '@/components/List';
import { TextField, IconButton, InputAdornment, Container, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs } from "firebase/firestore";
import db from '@/services/firebaseConfig';

const Page = () => {
  // TODO: Extract the items from the firestore
  const [items, setItems] = React.useState([]);
  const [itemNames, setItemNames] = React.useState([]);
  

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "food_items"));
    const itemData = querySnapshot.docs.map((doc) => ({
      itemName: doc.data().itemName,
      itemNumbers: doc.data().itemNumbers
    }));
    const itemNameData = itemData.map((item) => item.itemName);
    setItems(itemData);
    setItemNames(itemNameData);
  }
  useEffect(() => {
    getData();
  },[])

  return (
    <div>
      <Typography variant='h2' textAlign={'center'} marginY={5} fontWeight={'bold'} color={'tomato'}>
          Pantry Tracker
      </Typography>
      <SearchComponent itemNames={itemNames}/>
      <List items={items} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href="/add"
          sx={{
            padding: '10px 20px',
            borderRadius: 2,
            boxShadow: 3,
            textTransform: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '&:hover': {
              backgroundColor: '#E5534D', // Darker green on hover
              boxShadow: 6,
            },
            backgroundColor: '#FF6347', // Tomato
          }}
        >
          <AddIcon />
          Add Item
        </Button>
      </Box>
    </div>
  );
}

export default Page;
