'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Navbar = () => {
    const router = useRouter();

    const handleNavigate = (path) => {
        router.push(path);
    };

    return (
        <div>
        <AppBar position="static" sx={{ backgroundColor: '#FF6347' }}>
            <Toolbar>
                
                <Box>
                    <Button
                        sx={{ color: '#FFFFFF', marginRight: 2, fontWeight: 'bold', fontSize: 20 }}
                        onClick={() => handleNavigate('/')}
                        >
                        Home
                    </Button>
                    <Button
                        sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}
                        onClick={() => handleNavigate('/add')}
                        >
                        Add Item
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default Navbar;
