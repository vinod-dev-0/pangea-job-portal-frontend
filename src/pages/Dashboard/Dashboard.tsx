import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import RightPanel from '../../components/layout/RightPanel';
import DashboardContent from '../../components/Dashboard/Dashboard';

const Dashboard = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
            }}
        >
            {/* Header at the top */}
            {/* TODO:Change the header to App.tsx */}
            <Header />

            {/* Layout below Header: Sidebar + Content + RightPanel */}
            <Box
                sx={{
                    display: 'flex',
                    minHeight: 'calc(100vh - 64px)', // Adjust based on Header height
                }}
            >
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content + Right Panel */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                        p: 3,
                    }}
                >
                    {/* Main Dashboard Content */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            minWidth: 0,
                        }}
                    >
                        <DashboardContent />
                    </Box>

                    {/* Right Panel */}
                    <RightPanel />
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
