import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left Side - Logo looks fine, atleast for now, can be a dark logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            backgroundColor: '#ffffff',
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                        }}
                    >
                        <img
                            src="/assets/pangea_fullcolour_horizontal.png"
                            alt="Pangea Logo"
                            style={{
                                height: '32px',
                                width: 'auto',
                            }}
                        />
                    </Box>

                    {/* Navigation Links */}
                    <Box sx={{ display: 'flex', gap: 3, ml: 4 }}>
                        {[
                            'Platforms',
                            'Agents',
                            'Consulting',
                            'Techtonic',
                            'Company',
                        ].map(item => (
                            <Typography
                                key={item}
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'text.primary' },
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                {/* Right Side - Actions */}
                {/* TODO: make it a component/buttons CTA or relavent button */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button variant="outlined">View Demo</Button>
                    <Button
                        variant="outlined"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        Talk to Scout
                        <Box
                            sx={{
                                width: 16,
                                height: 16,
                                backgroundColor: 'primary.main',
                                borderRadius: 1,
                            }}
                        />
                    </Button>
                    <Button variant="contained" color="primary">
                        Get in touch →
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
