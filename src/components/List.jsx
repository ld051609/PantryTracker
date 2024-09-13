import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Container, Box, Divider } from '@mui/material';
import { List as ListIcon } from '@mui/icons-material';

const ItemList = ({ items }) => {
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Box
                sx={{
                    padding: 4,
                    boxShadow: 4,
                    borderRadius: 3,
                    backgroundColor: 'white',
                }}
            >

                <List>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <ListItem
                                sx={{
                                    borderBottom: '1px solid #ddd',
                                    padding: '8px 16px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.itemName}
                                    secondary={`Number: ${item.itemNumbers}`}
                                    primaryTypographyProps={{ fontWeight: 'bold' }}
                                />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default ItemList;
