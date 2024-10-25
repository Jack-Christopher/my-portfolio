import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material";
import ResponsiveDivider from "../units/ResponsiveDivider.tsx";

export default function AboutMe() {

    const theme = useTheme();

    return (
        <Box
            sx={{
                maxWidth: '100%',
                flexGrow: 1,
                display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5rem',
                padding: '1rem',
                color: theme.palette.primary.contrastText,
                textAlign: 'center',
                margin: '1rem',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    color: theme.palette.primary.contrastText,
                    width: {xs: '50%', lg: '33%'},
                    fontSize: {xs: '1.5rem', lg: '2rem'},
                    lineHeight: '1.5',
                }}
            >
                Hi, I'm Jack, a dedicated full-stack developer
                <span
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        margin: '0.5rem',
                        padding: '0.1rem 0.6rem',
                        borderRadius: '0.75rem 0rem',
                    }}
                >
                    you can rely on
                </span>
            </Typography>

            <ResponsiveDivider
                backgroundColor={theme.palette.primary.contrastText}
                initialOrientation="vertical"
            />

            <Box>
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        color: theme.palette.primary.contrastText,
                        marginY: '3rem',
                    }}
                >
                    💡 Driven by curiosity, fueled by innovation.
                </Typography>
                <ResponsiveDivider
                    backgroundColor={theme.palette.primary.contrastText}
                    initialOrientation="horizontal"
                />
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        color: theme.palette.primary.contrastText,
                        marginY: '3rem',
                    }}
                >
                    🫶 Creating meaningful solutions through collaboration.
                </Typography>
                <ResponsiveDivider
                    backgroundColor={theme.palette.primary.contrastText}
                    initialOrientation="horizontal"
                />
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        color: theme.palette.primary.contrastText,
                        marginY: '3rem',
                    }}
                >
                    🧱 Building the future, one challenge at a time.
                </Typography>
            </Box>
        </Box>
    );
}