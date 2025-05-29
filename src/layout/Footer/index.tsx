import * as React from 'react';
import { 
    Divider, Container, Box, Link, Typography, Stack, IconButton,
} from "@mui/material";
import { GitHub, X, LinkedIn } from '@mui/icons-material';
import Copyright from './components/Copyright';

export default function Footer(props: any) {
    return (
        <>
            <Divider />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: { xs: 4, sm: 8 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <Link color='text.secondary' variant='body2' href='#'>
                            Privacy Policy
                        </Link>
                        <Typography
                            sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}
                        >
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link color='text.secondary' variant='body2' href='#'>
                            Terms of Service
                        </Link>
                        <Copyright />
                        {/* <Copyright sx={{ my: 4 }} /> */}
                    </div>
                    <div></div>
                    <Stack
                        direction='row'
                        spacing={1}
                        useFlexGap
                        sx={{ justifyContent: 'left', color: 'text.secondary' }}
                    >
                        <IconButton
                            color='inherit'
                            size='small'
                            href='https://github.com/mui'
                            aria-label='GitHub'
                            sx={{ alignSelf: 'center' }}
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            color='inherit'
                            size='small'
                            href='https://x.com/MaterialUI'
                            aria-label='X'
                            sx={{ alignSelf: 'center' }}
                        >
                            <X />
                        </IconButton>
                        <IconButton
                            color='inherit'
                            size='small'
                            href='https://www.linkedin.com/company/mui/'
                            aria-label='LinkedIn'
                            sx={{ alignSelf: 'center' }}
                        >
                            <LinkedIn />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
