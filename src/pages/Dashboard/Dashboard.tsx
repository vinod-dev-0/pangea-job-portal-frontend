// Dashboard.tsx (Main Page)
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import RightPanel from '../../components/layout/RightPanel';
import DashboardContent from '../../components/Dashboard/Dashboard';

const Dashboard: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: 'background.default',
            }}
        >
            {/* Header - spans full width */}
            <Header />

            {/* Main layout with sidebar and content */}
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                }}
            >
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >

                {/* Dashboard Header - spans full width */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 3,
                        pt: 3,
                        pb: 2,
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

                {/* Content with Right Panel */}
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        gap: 3,
                        px: 3,
                        pb: 3,
                    }}
                >
                    {/* Main Dashboard Content */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            minWidth: 0, // Prevents flex item from overflowing
                        }}
                    >
                        <DashboardContent />
                    </Box>

                    {/* Right Panel */}
                    <RightPanel />
                </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;