import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Work as JobsIcon,
    People as TeamIcon,
    Description as TemplatesIcon,
} from '@mui/icons-material';

const sidebarItems = [
    {
        text: 'Dashboard',
        icon: <DashboardIcon />,
        active: true,
    },
    {
        text: 'Jobs',
        icon: <JobsIcon />,
        active: false,
    },
    {
        text: 'Team',
        icon: <TeamIcon />,
        active: false,
    },
    {
        text: 'Templates',
        icon: <TemplatesIcon />,
        active: false,
    },
];

const Sidebar: React.FC = () => {
    return (
        <Box
            sx={{
                width: 280,
                backgroundColor: 'background.paper',
                borderRight: '1px solid',
                borderColor: 'divider',
                p: 3,
            }}
        >
            <List sx={{ pt: 0 }}>
                {sidebarItems.map(item => (
                    <ListItem
                        key={item.text}
                        selected={item.active}
                        sx={{
                            mb: 1,
                            borderRadius: 2,
                            cursor: 'pointer',
                            color: item.active
                                ? 'primary.contrastText'
                                : 'text.secondary',
                            '&.Mui-selected': {
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                            },
                            '&:not(.Mui-selected):hover': {
                                backgroundColor: 'rgba(51, 65, 85, 0.5)',
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: 'inherit',
                                minWidth: 40,
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.text}
                            primaryTypographyProps={{
                                fontWeight: item.active ? 600 : 400,
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
