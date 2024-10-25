import CustomTimeline from "../units/CustomTimeline.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";

export default function WorkExperience() {

    const theme = useTheme();

    const timelineItems = [
        {
            company: "OpenHub",
            role: "Fullstack Developer",
            location: "Remote",
            startDate: "Jun 2023",
            endDate: "Aug 2023",
            description: [
                "Led the implementation of a digital signature system",
                "Developed frontend components with TypeScript, React, and Material-UI",
                "Streamlined document management using SharePoint, and Power Automate",
            ],
        },
        {
            company: "Kapital Telekom",
            role: "Fullstack Developer",
            location: "",
            startDate: "Jan 2024",
            endDate: "Aug 2024",
            description: [
                "Created a responsive elevator quotation platform using PHP/Laravel and JavaScript",
                "Integrated cloud-based solutions and managed MySQL databases",
                "Designed and implemented scalable systems for optimal performance",
            ],
        },
        {
            company: "Ensolvers",
            role: "Fullstack Developer",
            location: "Remote",
            startDate: "Aug 2024",
            endDate: "Sep 2024",
            description: [
                "Developed a comprehensive hiring platform using Spring Boot and React",
                "Implemented core backend functionalities and intuitive frontend experiences",
                "Enhanced automation and streamlined workflows across the platform",
            ],
        },
    ];


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
            <CustomTimeline
                items={timelineItems}
            />
        </Box>
    );
}