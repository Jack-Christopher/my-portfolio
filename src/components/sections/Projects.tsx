import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CustomSwiper from "../units/CustomSwiper.tsx";

export default function Projects() {

    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                padding: '1rem',
                textAlign: 'center',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h1"
                component="div"
                sx={{
                    color: '#fff',
                    marginTop: '3rem',
                }}
            >
                Code. Create. Innovate: My Creations Unveiled
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CustomSwiper />
            </Box>
        </Box>
    );
}