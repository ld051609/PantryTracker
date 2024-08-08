'use client';
import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, Container, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchComponent = ({ placeholder = "Search..." }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClear = () => {
        setSearchTerm('');
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Box
                sx={{
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
                    placeholder={placeholder}
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
            </Box>
        </Container>
    );
};

export default SearchComponent;
