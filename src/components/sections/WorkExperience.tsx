import CustomTimeline from "../units/CustomTimeline.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";

export default function WorkExperience() {

    const theme = useTheme();

    return (
        <Box
            sx={{
                mt: 4,
                mb: 4,
                color: theme.palette.primary.contrastText,
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    color: theme.palette.primary.contrastText,
                    textAlign: "center",
                    mb: 4
                }}
            >
                Where I’ve Made an Impact:

                <span
                    style={{
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.primary.contrastText,
                        padding: "0.2rem 0.5rem",
                        borderRadius: "0.5rem 0rem",
                        marginLeft: "1rem",
                    }}
                >
                Jobs that Shaped Me
                </span>
            </Typography>
            <CustomTimeline />
        </Box>
    );
}