import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import Banner from "../Sections/Banner";
import Doa from "../Sections/Doa";
import GroomBride from "../Sections/GroomBride";
import Events from "../Sections/Events";
import Story from "../Sections/Story";
import Gallery from "../Sections/Gallery";
import Gift from "../Sections/Gift";
import Wishes from "../Sections/Wishes";
import Attendance from "../Sections/Attendance";



type Props = {
  language: string;
};
function WelcomePage({language}: Props) {
   const location = useLocation();
   const invitationType = location.state.invType;

    useEffect(() => {
        document.title = "Sandy & Graha | #HAtiuntukberSANDar";
      }, []);

    return (
        <>
            <Banner lang={language}/>
            <Doa lang={language}/>
            <GroomBride lang={language}/>
            <Events lang={language}/>
            {invitationType == "ab" ? (''):(invitationType=="AB" ? (''):(<Story lang={language}/>))}
            <Gallery/>
            <Gift lang={language}/>
            <Wishes lang={language}/>
            <Attendance lang={language}/>
        </>
    );

}

export default WelcomePage;



