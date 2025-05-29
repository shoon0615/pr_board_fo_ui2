// import * as React from 'react';
import { 
    Card, CardHeader, CardContent, Avatar, Typography, Box, Container, IconButton, Chip,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MoreVert, SubdirectoryArrowRight, AlternateEmail } from '@mui/icons-material';

import MenuButton from "@/layout/Header/components/MenuButton";
import OptionsMenu from "@/layout/SideMenu/components/OptionsMenu";

const userTestimonials = [
    {
        avatar: <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />,
        name: 'Remy Sharp',
        occupation: '2025.03.03',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: (
            <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
        ),
        name: 'Travis Howard',
        occupation: '2025.03.03',
        testimonial:
            "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
    },
];

export default function Review() {
    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };
    return (
        <Container
            id='testimonials'
            sx={{
                // pt: { xs: 4, sm: 12 },
                // pb: { xs: 8, sm: 16 },
                pl: { xs: 0, sm: 0 },
                pr: { xs: 0, sm: 0 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // gap: { xs: 3, sm: 6 },
            }}
        >
            <Grid container spacing={2}>
                {userTestimonials.map((testimonial, index) => (
                    <Grid
                        // size={{ xs: 12, sm: 6, md: 4 }}
                        size={{ xs: 12, sm: 12, md: 12 }}
                        key={index}
                        sx={{ display: 'flex' }}
                    >
                        <Card
                            variant='outlined'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'start',
                                    gap: 2,
                                }}
                            >
                                <CardHeader
                                    avatar={testimonial.avatar}
                                    title={testimonial.name}
                                    subheader={testimonial.occupation}
                                />
                                <CardContent>
                                    <Typography
                                        variant='body1'
                                        gutterBottom
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {testimonial.testimonial}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
                {/* <Grid
                    size={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ display: 'flex', pl: { xs: 6, sm: 6 } }}
                >
                    <Box sx={{ alignSelf: 'center', pr: { xs: 2, sm: 2 } }}>
                        <SubdirectoryArrowRight sx={{ color: 'var(--template-palette-grey-500)' }} />
                    </Box> */}
                <Grid
                    size={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ display: 'flex' }}
                >
                    <Card
                        variant='outlined'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'start',
                                gap: 1,
                            }}
                        >
                            <Box sx={{ alignSelf: 'center' }}>
                                <SubdirectoryArrowRight sx={{ color: 'var(--template-palette-grey-500)' }} />
                            </Box>
                            <CardHeader
                                avatar={<Avatar alt='test_avatar' src='/static/images/avatar/1.jpg' />}
                                title="test_title"
                                subheader={userTestimonials[0].occupation}
                                /*action={
                                    <IconButton aria-label="settings">
                                        <MoreVert />
                                    </IconButton>
                                }*/
                            />
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ alignSelf: 'center' }}>
                                <MenuButton
                                    aria-label='Open menu'
                                    onClick={handleClick}
                                    sx={{ borderColor: 'transparent', backgroundColor: 'transparent' }}
                                    size='medium'
                                >
                                    <MoreVert />
                                </MenuButton>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', pl: { xs: 4, sm: 4 } }}>
                            <CardContent>
                                <Typography
                                    variant='body1'
                                    gutterBottom
                                    sx={{ color: 'text.secondary', display: 'flex', gap: 0.5 }}
                                >
                                    <Chip variant="outlined" size="small" icon={<AlternateEmail />} label="Travis Howard" />
                                    One of the standout One of the standout
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid
                    size={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ display: 'flex' }}
                >
                    <Card
                        variant='outlined'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'start',
                                gap: 1,
                            }}
                        >
                            <Box sx={{ alignSelf: 'center' }}>
                                <SubdirectoryArrowRight sx={{ color: 'var(--template-palette-grey-500)' }} />
                            </Box>
                            <CardHeader
                                avatar={<Avatar alt='Test_avatar' src='/static/images/avatar/1.jpg' />}
                                title="Test_title2"
                                subheader={userTestimonials[0].occupation}
                            />
                            <Box sx={{ flexGrow: 1 }} />
                            <OptionsMenu />
                        </Box>
                        <Box sx={{ display: 'flex', pl: { xs: 4, sm: 4 } }}>
                            <CardContent>
                                <Typography
                                    variant='body1'
                                    gutterBottom
                                    sx={{ color: 'text.secondary' }}
                                >
                                    Two of the standout Two of the standout
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
