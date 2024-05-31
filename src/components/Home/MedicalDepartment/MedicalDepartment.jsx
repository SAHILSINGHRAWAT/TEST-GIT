import React, { useEffect, useState } from 'react';
import './MedicalDepartment.scss';
import Cards from './Card';
import Img1 from './gynecologist.jpg';

const MedicalDepartment = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        let mouseTimer;
        const scrollInterval = setInterval(() => {
            setScrolling(true);
            mouseTimer = setTimeout(() => {
                setScrolling(false);
            }, 4000); // 4000 milliseconds for 4 seconds interval
        }, 4000); // 4000 milliseconds for 4 seconds interval

        const handleMouseMove = () => {
            setScrolling(true);
            clearTimeout(mouseTimer);
            mouseTimer = setTimeout(() => {
                setScrolling(false);
            }, 2000); // 4000 milliseconds for 4 seconds interval
        };

        const handleMouseLeave = () => {
            setScrolling(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            clearInterval(scrollInterval);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            className={`medical-main ${scrolling ? 'scrolling' : ''}`} 
        >
          <h1 style={{ textAlign: "center", color: "white", marginBottom:"60px"}}>
    <span style={{ borderBottom: "2px solid white" }}>Medical Department</span>
</h1>
            <div className="medical-cards">
                <Cards img={Img1} heading={"Gynecology"} para={"Dedicated to women's reproductive health, offering compassionate care, exams, treatments, and personalized support for every stage of life."}/>
                <Cards img={Img1}  heading={"Immunology"} para={"Dedicated to women's reproductive health, offering compassionate care, exams, treatments, and personalized support for every stage of life."}/>
                <Cards img={Img1}  heading={"Gynecology"} para={"Dedicated to women's reproductive health, offering compassionate care, exams, treatments, and personalized support for every stage of life."}/>
                <Cards img={Img1}  heading={"Gynecology"} para={"Dedicated to women's reproductive health, offering compassionate care, exams, treatments, and personalized support for every stage of life."}/>
                <Cards img={Img1}  heading={"Gynecology"} para={"Dedicated to women's reproductive health, offering compassionate care, exams, treatments, and personalized support for every stage of life."}/>
                <Cards img={Img1}  heading={"Gynecology"} para={"Dedicated to women's reproductive health, offering compassionate care, exams, treatments, and personalized support for every stage of life."}/>
            </div>
        </div>
    );
}

export default MedicalDepartment;
