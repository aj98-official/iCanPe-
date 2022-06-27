import React from "react";
import NavBar from "../Nav-bar/nav-bar";
import CareersHeader from "../Header/careers-header";
import WorkingWithUs from "../Others/working-with-us";
import SubmitYourCv from "../Others/submit-your-cv";
import Footer from "../Footer/footer";

export default function Careers(){
    return (
        <div>
            <NavBar type = "careers"/>
            <CareersHeader />
            <WorkingWithUs />
            <SubmitYourCv />
            <Footer />
        </div>
    )
}