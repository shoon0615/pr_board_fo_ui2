import { Box } from '@mui/material';

import HeaderContent from './HeaderContent';
import DataContent from './DataContent';

export default function MainContent() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <HeaderContent />
            <DataContent />
        </Box>
    );
}
