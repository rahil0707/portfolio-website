import "./index.scss"; 
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava, faHtml5, faJs, faSwift, faCss3 } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import LanguageList from "./LanguageList";

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
        <>
            <div className = "container about-page"> 
                <div className = "text-zone"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass}  strArray = {"About me".split("")} idx={15}/>
                    </h1>
                    <p>
                    I am a passionate and driven Master's Computer Engineering student with an unwavering commitment to excellence. I am eager to contribute my technical skills and problem-solving abilities to the world of software development and engineering. With a track record of consistently achieving top grades and a deep-rooted love for tackling challenges, I am dedicated to becoming one of the foremost software engineers in the field.
                    <br/>
                    <LanguageList />
                    <Link to="/about/tech" className="flat-button-3">FRAMEWORKS</Link>
                    <Link to="/about/dev" className="flat-button-4">TOOLS</Link>
                    </p>
                </div>
                <div className = "stage-cube-cont">
                    <div className = "cubespinner"> 
                        <div className = "face1">
                            <FontAwesomeIcon icon={faJs}/>
                        </div>
                        <div className = "face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className = "face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className = "face4">
                            <FontAwesomeIcon icon={faSwift} color="#5ED4F4"/>
                        </div>
                        <div className = "face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className = "face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About