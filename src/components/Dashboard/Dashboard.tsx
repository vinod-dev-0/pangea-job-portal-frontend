import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Chip,
    Grid,
    Divider,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const statsData = [
    { title: 'Total Jobs', value: '48' },
    { title: 'Active Jobs', value: '15' },
    { title: 'Active Applicants', value: '439' },
];

const recentJobs = [
    {
        title: 'AI/ML Engineer',
        type: 'Full-time',
        location: 'Bengaluru',
        postedDate: '14-04-2025',
        status: 'Open',
    },
    {
        title: 'AI/ML Engineer',
        type: 'Full-time',
        location: 'Bengaluru',
        postedDate: '14-04-2025',
        status: 'Closed',
    },
    {
        title: 'Data Scientist',
        type: 'Full-time',
        location: 'Hyderabad',
        postedDate: '14-04-2025',
        status: 'Open',
    },
];

const Dashboard: React.FC = () => {
    return (
        <Box>
            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {statsData.map((stat, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.secondary',
                                        mb: 1,
                                        fontSize: '1rem',
                                    }}
                                >
                                    {stat.title}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: 'text.primary',
                                        fontWeight: 700,
                                        fontSize: '2.5rem',
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Recent Jobs Header */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                    }}
                >
                    Recent Jobs
                </Typography>
                <Button
                    variant="text"
                    sx={{
                        color: 'primary.main',
                        textTransform: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                        },
                    }}
                >
                    View all jobs →
                </Button>
            </Box>

            {/* Individual Job Cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {recentJobs.map((job, index) => (
                    <Card key={index}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'text.primary',
                                            mb: 1,
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {job.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            mb: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    backgroundColor: 'success.main',
                                                }}
                                            />
                                            <Typography
                                                variant="body2"
                                                sx={{ 
                                                    color: 'text.secondary',
                                                    fontSize: '0.875rem',
                                                }}
                                            >
                                                {job.type}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{ 
                                                    color: 'error.main',
                                                    fontSize: '0.875rem',
                                                }}
                                            >
                                                📍 {job.location}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ 
                                            color: 'text.disabled',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Posted on : {job.postedDate}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        gap: 1,
                                        ml: 2,
                                    }}
                                >
                                    <Button 
                                        variant="outlined" 
                                        size="small"
                                        sx={{
                                            textTransform: 'none',
                                            fontSize: '0.875rem',
                                            borderRadius: 4,
                                            px: 2.5,
                                            py: 0.75,
                                            minWidth: 120,
                                            marginBottom: 1,
                                        }}
                                    >
                                        View details
                                    </Button>
                                    <Chip
                                        label={job.status}
                                        size="small"
                                        sx={{
                                            backgroundColor:
                                                job.status === 'Open'
                                                    ? 'success.main'
                                                    : 'error.main',
                                            color: 'white',
                                            fontWeight: 500,
                                            fontSize: '0.75rem',
                                            height: 24,
                                            minWidth: 60,
                                            borderRadius: 4,
                                            // marginTop: 1,
                                        }}
                                    />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Dashboard;