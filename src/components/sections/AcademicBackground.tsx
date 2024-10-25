import Box from "@mui/material/Box";
import Learning from "../../assets/img/learning.svg";
import Typography from "@mui/material/Typography";
import {Chip, List, ListItem, useTheme} from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';

import AWSIcon from "../../assets/img/aws_icon.svg";
import NVIDIAIcon from "../../assets/img/nvidia_icon.svg";
import USAIcon from "../../assets/img/usa_icon.svg";
import CodeIcon from "../../assets/img/code_icon.svg";

export default function AcademicBackground() {

    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                padding: '1rem',
                textAlign: 'center',
                flex: 1,
                display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        color: '#fff',
                    }}
                >
                    Bachelor of Computer Science
                    <br/>
                    National University of San Agustin, Arequipa, Peru
                    <br/>
                    <Chip
                        label="2019 - 2023"
                        sx={{
                            backgroundColor: '#fff',
                            color: '#000',
                            margin: '1rem 0',
                            padding: '0.5rem 1rem',
                            fontSize: '1.4rem',
                            fontFamily: 'Roboto'
                        }}
                        icon={<DateRangeIcon />}
                    />
                </Typography>
                <Box
                    component={'img'}
                    src={Learning}
                    alt="Learning"
                    sx={{
                        width: {xs: '80%', md: '50%'},
                        maxWidth: '400px',
                        display: 'block',
                        margin: {xs: '3rem auto', lg: '2rem 2rem'},
                    }}
                />
            </Box>

            <Box>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        color: '#fff',
                        textAlign: 'left',
                        margin: '3rem 2rem',
                    }}
                >
                    Certifications
                    <List>
                        <ListItem>
                            <img src={AWSIcon} alt="AWS" style={{width: '3rem', marginRight: '0.5rem'}}/>
                            AWS Academy Graduate - Cloud Architecting
                        </ListItem>
                        <ListItem>
                            <img src={NVIDIAIcon} alt="NVIDIA" style={{width: '3rem', marginRight: '0.5rem'}}/>
                            Fundamentals of Accelerated Data Science - NVIDIA
                        </ListItem>
                        <ListItem>
                            <img src={USAIcon} alt="USA" style={{width: '3rem', marginRight: '0.5rem'}}/>
                            Michigan English Test - B1 Level
                        </ListItem>
                        <ListItem>
                            <img src={CodeIcon} alt="Code" style={{width: '3rem', marginRight: '0.5rem'}}/>
                            Python, C++, and JavaScript Certifications - CodinGame
                        </ListItem>
                    </List>
                </Typography>
            </Box>
        </Box>
    );
}