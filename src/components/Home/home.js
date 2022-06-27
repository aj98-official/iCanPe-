import React from "react";
import NavBar from "../Nav-bar/nav-bar";
import Header from "../Header/header";
import Section1 from "../Section-1/section1";
import Section2 from "../Section-2/section2";
import Section3 from "../Section-3/Section3";
import Testimonial from "../Testimonial/testimonial";
import Team from "../Team/team";
import Contact from "../Contact/contact";
import Modal from "../Modal/modal";
import Footer from "../Footer/footer";

import useWindowDimensions from "../../Tools/window-dimensions";

export default function Home (){
  const size = useWindowDimensions();
    return (
        <div>
          <NavBar />
          <Modal />
          <Header />
          <Section1 />
          <Section2 />
          {(size > 991) ?<Section3 /> : ""}
          <Testimonial />
          <Team />
          <Contact />
          <Footer />
        </div>
      );
}