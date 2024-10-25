
import '../../styles/ProjectCard.css'
import Typography from "@mui/material/Typography";
import LinkIcon from '@mui/icons-material/Link';
import {useTheme} from "@mui/material";
import useResponsive from "../../hooks/useResponsive.ts";
import {breakpoints} from "../../constants/breakpoints.ts";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    labels: string[];
    link?: string;
}

export default function ProjectCard(props: ProjectCardProps) {

    const theme = useTheme();
    const { width } = useResponsive();

    return (
        <article className="article-wrapper" style={{width: width < breakpoints.md.min ? "150" : "320"}}>
            <div className="rounded-lg container-project">
                <img
                    src={props.image}
                    alt={props.title}
                    className="project-image"
                />
            </div>
            <div className="project-info">
                <div className="flex-pr">
                    <a
                        href={props.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Typography
                            variant="h3"
                            className="project-title text-nowrap"
                            sx={{
                                color: "black",
                                width: '350px',
                                flexWrap: "wrap",
                                ':hover': {
                                    color: theme.palette.primary.main,
                                    textDecoration: "underline",
                                }
                            }}
                        >
                            <LinkIcon sx={{fontSize: "2rem", marginLeft: "0.5rem", color: theme.palette.primary.main}}/>
                            {props.title}
                        </Typography>
                    </a>
            </div>


            <div className="project-description">
                {props.description}
            </div>

            <div className="types">
                    {props.labels.map((label, index) => (
                        <span
                            key={index}
                            className="project-type"
                            style={{
                                backgroundColor: "rgba(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", 0.43)",
                                color: "black",
                                textShadow: "0 0 5px white"
                            }}
                        >
                            • {label}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}