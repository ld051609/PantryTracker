'use client';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';
import { addDoc, doc, setDoc, collection } from "firebase/firestore"; 
import db from '@/services/firebaseConfig';
import { useRouter } from 'next/navigation';
 
const ItemForm = () => {
    const router = useRouter();

    function handleNavigate (path){
        router.push(path);
    };

    const [formData, setFormData] = useState({
        itemName: '',
        itemNumbers: '',
    });

    const [errors, setErrors] = useState({
        itemName: '',
        itemNumbers: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Reset errors on change
        setErrors({
            ...errors,
            [name]: '',
        });
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add the items 
        const docRef = collection(db, 'food_items');
        const payload = {
            itemName: formData.itemName,
            itemNumbers: formData.itemNumbers,
        };
        await addDoc(docRef, payload);
        // Show alert if item added successfully
        alert('Item added successfully');
        // Reset form data
        setFormData({
            itemName: '',
            itemNumbers: '',
        });
        handleNavigate('/');
        
        
    };
    
    return (
        <Container maxWidth="sm" style={{ marginTop: '3rem', padding: '2rem' }}>
            <Typography variant="h3" marginY={4} textAlign="center" color="tomato" fontWeight={600} letterSpacing={7} >
                Inventory Entry
            </Typography>
            <Box
                sx={{
                    padding: 4,
                    boxShadow: 3,
                    borderRadius: 3,
                    backgroundColor: '#FFFFFF',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Item Name"
                                name="itemName"
                                value={formData.itemName}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                required
                                error={!!errors.itemName}
                                helperText={errors.itemName}
                                placeholder="Enter the name of the item"
                                InputLabelProps={{
                                }}
                                InputProps={{
                                }}
                                FormHelperTextProps={{
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Number of Items"
                                name="itemNumbers"
                                type="number"
                                value={formData.itemNumbers}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                required
                                error={!!errors.itemNumbers}
                                helperText={errors.itemNumbers}
                                placeholder="Enter the number of items"
                                InputLabelProps={{
                                    
                                }}
                                InputProps={{
                                    
                                }}
                                FormHelperTextProps={{
                                  
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                sx={{ 
                                    backgroundColor: '#FF6347', // Tomato color
                                    color: '#FFFFFF', // White text
                                    '&:hover': {
                                        backgroundColor: '#FF4500', // Darker tomato color
                                    },
                                    '&:focus': {
                                        outline: '3px solid #FF6347', // Tomato color outline for focus
                                    },
                                    padding: '10px 30px',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default ItemForm;
