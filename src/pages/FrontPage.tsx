import ConditionsSection from '@/components/homePage/ConditionsSection';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React,{useEffect} from "react";
import Navbar from '@/components/registrationForm/Navbar';
import LandingSection from '@/components/frontPage/LandingSection';
import FAQSection from '@/components/homePage/FAQSection';
import LearningSection from '@/components/homePage/LearningSection';
export const FrontPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <Navbar/>
           <div className="flex flex-col">
                <LandingSection/>
                <LearningSection/>
                <ConditionsSection/> 
                <FAQSection/>
            </div>
        </>
    );
}