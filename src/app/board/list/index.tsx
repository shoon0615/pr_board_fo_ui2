import * as React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import AppTheme from '@/shared/shared-theme/AppTheme';

import HeaderContent from '@/features/board/components/list/HeaderContent';
import MainContent from '@/features/board/components/list/MainContent';

const StyledGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container
            maxWidth='lg'
            component='main'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                my: 16,
                gap: 4,
                fontFamily: 'Inter, sans-serif',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                { children }
            </Box>
        </Container>
    );
};

export default function List(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <StyledGrid>
                <HeaderContent />
                <MainContent />
            </StyledGrid>
        </AppTheme>
    );
}
