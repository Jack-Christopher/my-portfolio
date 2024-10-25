import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation, EffectCoverflow} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import '../../styles/CustomSwiper.css';
import ProjectCard from "./ProjectCard.tsx";
import useResponsive from "../../hooks/useResponsive.ts";
import {breakpoints as breakpoints_} from "../../constants/breakpoints.ts";

import TatleonProject from '../../assets/img/Tatleon_project.jpg';
import NotemakerProject from '../../assets/img/Notemaker_project.jpg';
import PowerOutageNotifierProject from '../../assets/img/PowerOutageNotifier_project.jpg';
import BusifyProject from '../../assets/img/Busify_project.jpg';
import SemCompProject from '../../assets/img/SemComp_project.jpg';




export default function CustomSwiper() {

    const { width: width_ } = useResponsive();

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            centeredSlides={true}
            slidesPerView={ width_ < breakpoints_.md.min ? 1 : width_ < breakpoints_.lg.min ? 2 : 3}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            pagination={{
                clickable: true,
                type: 'progressbar',
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
            style={{
                width: +width_ < breakpoints_.lg.min ? '100vw' : '75vw',
                margin: '2rem',
            }}
        >
            <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                <ProjectCard title="SemComp" image={SemCompProject} description="✨ A dynamic website showcasing Computer Week at UNSA 🎉." labels={["React", "Node.js", "MongoDB"]} />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                <ProjectCard title="Busify" image={BusifyProject} description="🤖 Amazing travel path scheduling platform quickly and easily." labels={["PHP", "Laravel", "JavaScript"]} />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                <ProjectCard title="Tatleon Web" image={TatleonProject} description="📚 Information hub for all UNSA students and their needs." labels={["PHP", "Laravel", "MySQL"]} />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                <ProjectCard title="NoteMaker" image={NotemakerProject} description="Note Maker App 🚀 Create, edit, archive, and filter notes with category support." labels={["Java", "Spring Boot", "React"]} link="https://github.com/Jack-Christopher/notemaker" />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                <ProjectCard title="Power Outage Notifier" image={PowerOutageNotifierProject} description="💡 Get notified when there's a power outage in your area." labels={["Python", "Selenium"]} link="https://github.com/Jack-Christopher/Power-Outage-Notifier" />
            </SwiperSlide>
        </Swiper>
    );
}
