import * as React from 'react';
import { alpha } from '@mui/material/styles';
import {
    CssBaseline, Box, Stack, 
} from '@mui/material';
import AppTheme from '@/shared/shared-theme/AppTheme';

import SideMenu from '@/layout/SideMenu/SideMenu';
import Header from '@/layout/Header';

import AppNavbar from './components/AppNavbar';
import MainGrid from './components/MainGrid';

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    // <AppTheme {...props} themeComponents={xThemeComponents}>
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
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
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
