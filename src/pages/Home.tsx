import Navbar from "../components/sections/Navbar.tsx";
import Footer from "../components/sections/Footer.tsx";
import Hero from "../components/sections/Hero.tsx";
import AboutMe from "../components/sections/AboutMe.tsx";
import AcademicBackground from "../components/sections/AcademicBackground.tsx";
import Box from "@mui/material/Box";
import WorkExperience from "../components/sections/WorkExperience.tsx";
import Projects from "../components/sections/Projects.tsx";

const Home = () => {
    document.title = import.meta.env.VITE_APP_NAME;
    return (
        <Box>
            <Navbar />

            <Hero />
            <AboutMe />
            <AcademicBackground />
            <WorkExperience />
            <Projects />

            <Footer />
        </Box>
    );
}

export default Home;