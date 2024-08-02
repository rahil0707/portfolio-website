import { useEffect, useState } from 'react'
import {
  faAngular,
  faPython,
  faGithub,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Passionate and driven Computer Engineering student with an unwavering commitment to excellence. Eager to contribute my technical skills and problem-solving abilities to the world of software development and engineering. With a track record of consistently achieving top grades and a deep-rooted love for tackling challenges, I am dedicated to becoming one of the foremost computer engineers and software developers in the field.
          </p>
          <p align="LEFT">
          My ultimate goal is to make a positive impact on people's lives and enhance the world around me. I thrive on the satisfaction of helping others through innovation and service, aiming to drive progress and create meaningful change. An avid listener and enthusiastic learner, I constantly seek opportunities to broaden my knowledge and skill set to continuously improve my work.
          </p>
          <p>
          I'm not just a passive learner; I'm an active participant in class discussions, often being the first to engage and provide insightful answers. Leading from the front comes naturally to me, as I'm driven to motivate and inspire others to give their best. I am relentless in my pursuit of personal and professional growth, always striving to be the best version of myself.
          </p>
          <p>
          If you're seeking a dedicated team member who combines technical expertise with a genuine desire to make a difference, I look forward to connecting with you and exploring ways we can collaborate to achieve remarkable outcomes.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
