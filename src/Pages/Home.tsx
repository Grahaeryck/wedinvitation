import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import Banner from "../Sections/Banner";
import Doa from "../Sections/Doa";
import GroomBride from "../Sections/GroomBride";
import Events from "../Sections/Events";
import Story from "../Sections/Story";
// import Gallery from "../Sections/Gallery";
import Gift from "../Sections/Gift";
import Wishes from "../Sections/Wishes";
import Attendance from "../Sections/Attendance";
import GallerySwipper from '../Sections/GallerySwipper';
import BannerAB from '../Sections/BannerAB';

type Props = {
  language: string;
  type: string;
};
function WelcomePage({language, type}: Props) {
   const location = useLocation();
   const [invType, setInvType] = useState<string | null>('SG');
   
    useEffect(() => {
        document.title = "Sandy & Graha | #HAtiuntukberSANDar";

        if(localStorage.getItem("Type") !== null)
        {
          setInvType(localStorage.getItem("Type"))
        }
      }, []);
      console.log(invType);
    return (
        <>
            
            {type == "ab" || type=="AB" ? (<BannerAB lang={language}/>):(<Banner lang={language}/>)}
            <Doa lang={language}/>
            <GroomBride lang={language}/>
            <Events lang={language}/>
            {type == "ab" || type=="AB" ? (''):(<Story lang={language}/>)}
            <GallerySwipper/>
            {type == "ab" || type=="AB" ? (''):(<Gift lang={language} type={type}/>)}
            <Wishes lang={language}/>
            <Attendance lang={language}/>
        </>
    );

}

export default WelcomePage;



