import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import MyAvatar from "../../assets/img/avatar.png";
import MyAvatar2 from "../../assets/img/avatar2.png";
import HoverButton from "../units/HoverButton.tsx";

export default function Hero() {
    const theme = useTheme();

    const [currentAvatar, setCurrentAvatar] = useState<string>(MyAvatar);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAvatar((prevAvatar) => (prevAvatar === MyAvatar ? MyAvatar2 : MyAvatar));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <header style={{ background: theme.palette.background.paper }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', lg: 'row'},
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 6,
                    px: 2,
                    backgroundColor: theme.palette.background.paper,
                }}
            >
                <Box
                    sx={{
                        centered: {xs: 'center', lg: 'left'},
                        width: '100%',
                    }}

                >
                    <Typography
                        variant="h1"
                        sx={{
                            my: 5,
                            typography: { xs: 'h3', lg: 'h1' },
                            color: theme.palette.primary.contrastText,
                            textAlign: 'center',
                        }}
                    >
                        Jack Christopher
                        <br />
                        Huaihua Huayhua
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            my: 5,
                            typography: { xs: 'h6', lg: 'h2' },
                            color: theme.palette.primary.contrastText,
                            textAlign: 'center',
                        }}
                    >
                        Fullstack Developer |
                        Arequipa, Peru
                    </Typography>

                    <Box textAlign={"center"}>
                        <HoverButton text={"Get in touch →"} link={"#footer"} />
                    </Box>
                </Box>

                <Box
                    component={'img'}
                    src={currentAvatar}
                    alt="Avatar"
                    sx={{
                        width: {xs: '250px', lg: '500px'},
                        maxWidth: '500px',
                        display: 'block',
                        margin: '3rem 2rem',
                    }}
                />
            </Box>
        </header>
    );
}
