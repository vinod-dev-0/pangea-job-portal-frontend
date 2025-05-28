import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Chip,
    Grid,
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
            {/* Dashboard Header */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                    }}
                >
                    Dashboard
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    color="primary"
                    sx={{ px: 3 }}
                >
                    New Job Post
                </Button>
            </Box>

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

            {/* Recent Jobs */}
            <Card>
                <CardContent>
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
                            }}
                        >
                            Recent Jobs
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'primary.main',
                                cursor: 'pointer',
                            }}
                        >
                            View all jobs →
                        </Typography>
                    </Box>

                    {recentJobs.map((job, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                py: 2,
                                borderBottom:
                                    index < recentJobs.length - 1
                                        ? '1px solid'
                                        : 'none',
                                borderColor: 'divider',
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.primary',
                                        mb: 1,
                                        fontSize: '1.1rem',
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
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: 'primary.main',
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'text.secondary' }}
                                        >
                                            {job.type}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'error.main' }}
                                    >
                                        📍 {job.location}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.disabled' }}
                                >
                                    Posted on : {job.postedDate}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
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
                                    }}
                                />
                                <Button variant="outlined" size="small">
                                    View details
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
};

export default Dashboard;
