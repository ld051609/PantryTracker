'use client';
import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, Container, Box, List, ListItem, ListItemText, Fade } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchComponent = ({ itemNames }) => {
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
                        }}
                    >
                        <Fade in={!!searchTerm}>
                            <List>
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((item, index) => (
                                        <ListItem button key={index}>
                                            <ListItemText primary={item} />
                                        </ListItem>
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
    );
};

export default SearchComponent;
