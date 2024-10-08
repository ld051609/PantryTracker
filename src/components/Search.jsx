'use client';
import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, Container, Box, List, ListItem, ListItemText, Fade, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Navbar from './Navbar'; // Importing the Navbar component

const SearchComponent = ({ itemNames, items }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClear = () => {
        setSearchTerm('');
    };

    // Filter items based on the searchTerm
    const filteredItems = itemNames.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
        

            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: '#FFFFFF',
                        padding: '8px',
                        border: '1px solid #DDDDDD',
                    }}
                >
                    <TextField
                        variant="outlined"
                        placeholder={'Search...'}
                        value={searchTerm}
                        onChange={handleChange}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: searchTerm && (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClear} edge="end">
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Display results only if searchTerm is not empty */}
                    {searchTerm && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #DDDDDD',
                                boxShadow: 3,
                                borderRadius: 2,
                                zIndex: 1000,
                                mt: 1,
                            }}
                        >
                            <Fade in={!!searchTerm}>
                                <List>
                                    {filteredItems.length > 0 ? (
                                        filteredItems.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <ListItem 
                                                    sx={{ 
                                                        borderBottom: '1px solid #DDDDDD',
                                                        '&:hover': {
                                                            backgroundColor: '#F5F5F5',
                                                            cursor: 'pointer'
                                                        }
                                                    }}
                                                >
                                                    <ListItemText 
                                                        primary={item} 
                                                        primaryTypographyProps={{ fontWeight: 'bold' }}
                                                    />
                                                    <Box sx={{ flexGrow: 1 }} />
                                                    {
                                                        items.filter(i => i.itemName === item).map((i, index) => (
                                                            <ListItemText 
                                                                key={index} 
                                                                secondary={`Item Numbers: ${i.itemNumbers}`} 
                                                                secondaryTypographyProps={{ color: '#888888' }}
                                                            />
                                                        ))
                                                    }
                                                </ListItem>
                                                <Divider />
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <ListItem>
                                            <ListItemText primary="No items found" />
                                        </ListItem>
                                    )}
                                </List>
                            </Fade>
                        </Box>
                    )}
                </Box>
            </Container>
        </div>
    );
};

export default SearchComponent;
