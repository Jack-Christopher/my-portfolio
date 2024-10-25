import Button from "@mui/material/Button";
import {useTheme} from "@mui/material";

interface HoverButtonProps {
    text: string;
    link: string;
}

export default function HoverButton(props: HoverButtonProps) {

    const theme = useTheme();

    return (
        <Button
            variant="contained"
            sx={{
                padding: theme.spacing(1, 2),
                borderRadius: theme.shape.borderRadius,
                fontWeight: "bold",
                letterSpacing: 5,
                textTransform: "uppercase",
                cursor: "pointer",
                color: theme.palette.primary.main,
                transition: "all 1000ms",
                fontSize: 15,
                position: "relative",
                overflow: "hidden",
                outline: "2px solid " + theme.palette.primary.main,
                backgroundColor: theme.palette.primary.contrastText,
                "&:hover": {
                    color: "#ffffff",
                    transform: "scale(1.1)",
                    outline: "2px solid " + theme.palette.primary.contrastText,
                    boxShadow: "4px 5px 17px -4px " + theme.palette.primary.contrastText,
                    borderWidth: 8,
                },
                "&::before": {
                    content: '""',
                    position: "absolute",
                    left: -50,
                    top: 0,
                    width: 0,
                    height: "100%",
                    backgroundColor: theme.palette.primary.main,
                    transform: "skewX(45deg)",
                    zIndex: -1,
                    transition: "width 1000ms",
                },
                "&:hover::before": {
                    width: "250%",
                },
            }}
            href={props.link}
        >
            {props.text}
        </Button>
    );
}