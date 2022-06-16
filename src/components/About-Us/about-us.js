import React from "react";
import NavBar from "../Nav-bar/nav-bar";
import Footer from "../Footer/footer";
import AboutUsHeader from "../Header/about-us-header";
import OurStory from "../Others/our-story";
import Numbers from "../Others/numbers";
import OurBelieve from "../Others/our-believe";
import OurLeaderShip from "../Others/our-leadership";

export default function AboutUs(){
    return (
        <div>
            <NavBar />
            <AboutUsHeader />
            <OurStory />
            <Numbers />
            <OurBelieve />
            <OurLeaderShip />
            <Footer />
        </div>
    )
}