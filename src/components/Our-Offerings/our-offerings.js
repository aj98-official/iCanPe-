import React from "react";
import NavBar from "../Nav-bar/nav-bar";
import OurOfferingsHeader from "../Header/our-offerings-header";
import Solutions from "../Others/solutions";
import Features from "../Others/features";
import IdentifyProblems from "../Others/identify-problems";
import ImplementSolution from "../Others/implement-solution";
import Footer from "../Footer/footer";

export default function OurOfferings(){
    return (
        <div>
            <NavBar />
            <OurOfferingsHeader />
            <Solutions />
            <Features />
            <IdentifyProblems />
            <ImplementSolution />
            <Footer />
        </div>
    )
}