import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";


import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DoneIcon from '@mui/icons-material/Done';

import Typography from "@mui/material/Typography";
import {List, ListItem, ListItemIcon, ListItemText, useTheme} from "@mui/material";

interface TimelineItem {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

interface CustomTimeline {
    items: TimelineItem[];
}

export default function CustomTimeline(props: CustomTimeline) {

    const theme = useTheme();
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                >
                    <span
                        style={{
                            backgroundColor: theme.palette.primary.main,
                            color: '#fff',
                            padding: '0.5rem 1rem',
                            borderRadius: '1rem 0 0 1rem',
                        }}
                    >
                        June 2023 - August 2023
                    </span>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="warning">
                        <OutlinedFlagIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '24px', px: 2 }}>
                    <Typography variant="h4" component="span">
                        OpenHub | Fullstack Developer (Remote)
                    </Typography>
                    <List sx={{maxWidth: '100%', display: {xs: 'none', lg: 'block', gap: '1rem', justifyContent: 'center'}}}>
                        <ListItem>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                <DoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Led the implementation of a digital signature system"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                <DoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Developed frontend components with TypeScript, React, and  Material UI"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                <DoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Streamlined document management using SharePoint, and Power Automate"/>
                        </ListItem>
                    </List>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                >
                    <span
                        style={{
                            marginLeft: '1rem',
                            backgroundColor: theme.palette.primary.main,
                            color: '#fff',
                            padding: '0.5rem 1rem',
                            borderRadius: '0 1rem 1rem 0',
                        }}
                    >
                        January 2024 - August 2024
                    </span>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="warning">
                        <ElectricBoltIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '24px', px: 2 }}>
                    <Typography variant="h4" component="span" sx={{marginRight: '24px'}}>
                        Kapital Telekom | Fullstack Developer
                    </Typography>
                    <List sx={{maxWidth: '100%', textAlign: 'right', display: {xs: 'none', lg: 'block', gap: '1rem', justifyContent: 'center'}}}>
                        <ListItem sx={{textAlign: 'right'}} >
                            <ListItemText primary="Created a responsive elevator quotation platform using PHP/Laravel and JavaScript"/>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText, marginLeft: '24px'}}>
                                <DoneIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem sx={{textAlign: 'right'}} >
                            <ListItemText primary="Integrated cloud-based solutions and managed MySQL databases"/>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText, marginLeft: '24px'}}>
                                <DoneIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem sx={{textAlign: 'right'}} >
                            <ListItemText primary="Designed and implemented scalable systems for optimal performance"/>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText, marginLeft: '24px'}}>
                                <DoneIcon/>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                >
                    <span
                        style={{
                            marginRight: '1rem',
                            backgroundColor: theme.palette.primary.main,
                            color: '#fff',
                            padding: '0.5rem 1rem',
                            borderRadius: '1rem 0 0 1rem',
                        }}
                    >
                        August 2024 - September 2024
                    </span>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="warning">
                        <AttachMoneyIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '24px', px: 2 }}>
                    <Typography variant="h4" component="span">
                        Ensolvers | Fullstack Developer (Remote)
                    </Typography>
                    <List sx={{maxWidth: '100%', display: {xs: 'none', lg: 'block', gap: '1rem', justifyContent: 'center'}}}>
                        <ListItem>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                <DoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Developed a comprehensive hiring platform using Spring Boot and React"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                <DoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Implemented core backend functionalities and intuitive frontend experiences"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                <DoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Enhanced automation and streamlined workflows across the platform"/>
                        </ListItem>
                    </List>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}