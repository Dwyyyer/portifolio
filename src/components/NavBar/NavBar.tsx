import * as React from 'react';
import AppBar, { type AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Fade, useScrollTrigger } from '@mui/material';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Fade in={!trigger}>
            {children ?? <div />}
        </Fade>
    );
}

const drawerWidth = 240;
const navItems = ['Projects', 'About', 'Contact'];

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    backgroundImage: 'none',
    display: 'flex',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, 0) 95%)',
    //transition: 'opacity .3',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    display: 'block',

    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },

    '& .MuiDrawer-paper': {
        backgroundColor: theme.palette.background.default,
        boxSizing: 'border-box',
        width: drawerWidth,
    },
}));

const NavBar = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', }}>
            <React.Fragment>
                <CssBaseline />
                <HideOnScroll {...props}>
                        <StyledAppBar component="nav">
                            <Toolbar sx={{
                                display: 'flex',
                                justifyContent: { xs: 'space-between', sm: 'left' },
                            }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    {navItems.map((item) => (
                                        <StyledButton key={item}>
                                            {item}
                                        </StyledButton>
                                    ))}
                                </Box>
                            </Toolbar>
                        </StyledAppBar>
                </HideOnScroll>
                <nav>
                    <StyledDrawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </StyledDrawer>
                </nav>
            </React.Fragment>
        </Box>
    );
}
export default NavBar;