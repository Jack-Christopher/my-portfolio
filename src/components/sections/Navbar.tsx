import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/img/icon.png';
import {useTheme} from "@mui/material";

export default function Navbar() {

    const theme = useTheme();

    return (
        <Box sx={{ top: 0, flexGrow: 1, position: 'fixed', width: '100%', zIndex: 1000 }}>
            <AppBar position="static" sx={{backgroundColor: theme.palette.background.default, boxShadow: 'none'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Button sx={{marginX: 2, display: 'flex', alignItems: 'center'}}>
                        <img src={Logo} alt="logo" className="h-10 w-10"/>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, color: '#fff'}}>
                            {import.meta.env.VITE_APP_NAME}
                        </Typography>
                    </Button>

                    <Button color="inherit" sx={{marginX: 2}} href="/work-experience">
                        Work Experience
                    </Button>
                    <Button color="inherit" sx={{marginX: 2}} href="/education">
                        Education
                    </Button>
                    <Button color="inherit" sx={{marginX: 2}} href="/projects">
                        Projects
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
