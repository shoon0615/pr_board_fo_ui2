import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { useParams, Link } from 'react-router-dom';

function getStepContent(step: number) {
    switch (step) {
        case 1:
            return <AddressForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout(props: { disableCustomTheme?: boolean }) {
    const [activeStep, setActiveStep] = React.useState(1);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setActiveStep(+newValue);
    };

    const { bdId } = useParams();
    console.log('bdId:', bdId);

    return (
        <Grid
            container
            sx={{
                height: {
                    xs: '100%',
                    // sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                    sm: '100%',
                },
                mt: {
                    xs: 4,
                    sm: 0,
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    width: '100%',
                    maxWidth: { sm: '100%', md: 600 },
                    // maxHeight: '720px',
                    gap: { xs: 5, md: 'none' },
                }}
            >
                <div>
                    <Typography variant='h2'>게시판</Typography>
                </div>
                <React.Fragment>
                    <Grid container spacing={2} columns={12}>
                        <Grid size={{ xs: 8, md: 8 }}></Grid>
                        <Grid size={{ xs: 4, md: 4 }}>
                            <Stack spacing={1}>
                                <List disablePadding>
                                    <ListItem sx={{ py: 0, px: 0 }}>
                                        <ListItemText
                                            primary='작성자'
                                            sx={{ color: 'text.secondary' }}
                                        />
                                        <Typography variant='body1'>
                                            John Smith
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 0, px: 0 }}>
                                        <ListItemText
                                            primary='작성일자'
                                            sx={{ color: 'text.secondary' }}
                                        />
                                        <Typography variant='body1'>
                                            2025.03.03
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ py: 0, px: 0 }}>
                                        <ListItemText
                                            primary='조회 수'
                                            sx={{ color: 'text.secondary' }}
                                        />
                                        <Typography variant='body2'>
                                            1
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label='disabled tabs example'
                        >
                            <Tab label='MAIN' value='1' />
                            <Tab label={`REVIEW(${value})`} value='2' />
                        </Tabs>
                    </Box>
                    {getStepContent(activeStep)}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column-reverse',
                                sm: 'row',
                            },
                            alignItems: 'end',
                            flexGrow: 1,
                            gap: 1,
                            pb: { xs: 12, sm: 0 },
                            mt: { xs: 2, sm: 0 },
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Link to={`/board/test/${bdId}`}>
                        <Button
                            variant='contained'
                            endIcon={<ChevronRightRoundedIcon />}
                            // onClick={handleNext}
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: 'fit-content',
                                },
                            }}
                        >
                            Next
                        </Button>
                        </Link>
                    </Box>
                </React.Fragment>
            </Box>
        </Grid>
    );
}
