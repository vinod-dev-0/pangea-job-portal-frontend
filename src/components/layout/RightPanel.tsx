import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    Divider,
} from '@mui/material';

const upcomingInterviews = [
    {
        name: 'John',
        role: 'Engineering Lead',
        date: '14 April',
        time: '15:00 (IST)',
    },
    {
        name: 'John',
        role: 'Engineering Lead',
        date: '14 April',
        time: '15:00 (IST)',
    },
    {
        name: 'John',
        role: 'Engineering Lead',
        date: '14 April',
        time: '15:00 (IST)',
    },
];

const recentActivities = [
    {
        text: 'Amrit Mishra submitted application for Marketing Manager.',
        date: '14 April',
    },
    {
        text: 'Amrit Mishra submitted application for Marketing Manager.',
        date: '14 April',
    },
];

const RightPanel: React.FC = () => {
    return (
        <Box
            sx={{
                width: 350,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            {/* Upcoming Interviews */}
            <Card>
                <CardContent>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.primary',
                            mb: 3,
                            fontWeight: 600,
                        }}
                    >
                        Upcoming Interviews
                    </Typography>

                    {upcomingInterviews.map((interview, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    mb: 1,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        backgroundColor: 'primary.main',
                                    }}
                                >
                                    {interview.name[0]}
                                </Avatar>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: 'text.primary' }}
                                    >
                                        {interview.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {interview.role}
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'right' }}>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {interview.date}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {interview.time}
                                    </Typography>
                                </Box>
                            </Box>
                            {index < upcomingInterviews.length - 1 && (
                                <Divider />
                            )}
                        </Box>
                    ))}

                    <Typography
                        variant="body2"
                        sx={{
                            color: 'primary.main',
                            cursor: 'pointer',
                            textAlign: 'center',
                            mt: 2,
                        }}
                    >
                        View more →
                    </Typography>
                </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
                <CardContent>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.primary',
                            mb: 3,
                            fontWeight: 600,
                        }}
                    >
                        Recent Activity
                    </Typography>

                    {recentActivities.map((activity, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 1,
                                    lineHeight: 1.5,
                                }}
                            >
                                {activity.text}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ color: 'text.disabled' }}
                            >
                                {activity.date}
                            </Typography>
                            {index < recentActivities.length - 1 && (
                                <Divider sx={{ mt: 2 }} />
                            )}
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
};

export default RightPanel;
