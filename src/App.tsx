import React, { useState } from 'react';
import AppTheme from './components/shared-theme/AppTheme';
// import { CssBaseline, Box, Stack, ... } from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import SideMenu from './layout/SideMenu/SideMenu';
import AppNavbar from './components/dashboard/components/AppNavbar';
import Header from './layout/Header/Header';
import { useLocation, useOutlet, Outlet, ScrollRestoration } from 'react-router-dom';
import BackToTop from './layout/Header/components/ScrollTop';
import Footer from './layout/Footer/Footer';

import { motion, AnimatePresence } from 'framer-motion';


/**
 * Dashboard 컴포넌트와 동일
 */
function App(props: { disableCustomTheme?: boolean }) {
    const [state, setState] = useState({ open: false });
    // const location = useLocation();
    // const outlet = useOutlet();
    
    // 원인은 모르겠으나 toggleDrawer 로 props 보내면 적용 안됨.. -> toggleDrawer(false) 로 넘어가는 듯함..
    /*const toggleDrawer = (newOpen: boolean) => () => {
        setState({ ...state, open: newOpen });
    };*/

    return (
        // <Dashboard />

        // <AppTheme {...props} themeComponents={xThemeComponents}>
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                {/* Side content */}
                <SideMenu open={state.open} toggleDrawer={setState} />

                {/* App Navigation Bar */}
                <AppNavbar />

                {/* Main content */}
                <Box
                    component='main'
                    sx={(theme) => ({
                        flexGrow: 1,
                        // backgroundColor: alpha(theme.palette.background.default, 1),
                        backgroundColor: `rgba(${theme.palette.background.default} / 1)`,
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 5,
                            mt: { xs: 8, md: 0 },
                        }}
                    >
                        <Toolbar id="back-to-top-anchor" />
                        <Header toggleDrawer={setState} />
                        
                        {/* <AnimatePresence>
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, position: 'absolute' }}
                                transition={{ duration: 0.3 }}>
                                {outlet}
                            </motion.div>
                        </AnimatePresence> */}
                        <Outlet />

                        <ScrollRestoration />
                        <BackToTop />
                        <Footer sx={{ my: 4 }} />
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}

export default App;
