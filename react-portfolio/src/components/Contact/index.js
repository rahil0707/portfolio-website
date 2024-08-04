import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
            .sendForm(
                'service_foe4wak',
                'template_rjxejph',
                refForm.current,
                '2z6QmHwRnqopuPEdJ'
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                }, 
                () => { 
                    alert("Failed to send the message, please try again")
                }
            )
      }

    return(
        <>
            <div className = "container contact-page">
                <div className = "text-zone">
                    <table>
                        <tr>
                            <td className="left-side">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray = {"Contact me".split("")} idx = {15} />
                                </h1>
                                <p>
                                    <br/>
                                    Thank you for visiting my portfolio and for your interest in reaching out.
                                    <br/>
                                    <br/>Whether you have a question, a project idea or just want to say hello, feel free to reach out! I am excited to hear about what you have in mind and welcome any input, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
                                    <br/>
                                    <br/>
                                    <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/mrahilh/">
                                        <FontAwesomeIcon icon={faLinkedin}  class = "icon" color = "#4d4d4e" />
                                    </a>
                                    <a target = "_blank" rel = "noreferrer" href = "mailto:rahilhussain10@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} class = "icon" color = "#4d4d4e" />
                                    </a>
                                </p>
                            </td>
                            <td className="right-side">
                                <div className="contact-form">
                                    <form ref={refForm} onSubmit={sendEmail}>
                                        <ul>
                                            <li className = "half">
                                                <input type="text" name="from_name" placeholder="Name" required />
                                            </li>
                                            <li className="half">
                                                <input type="email" name="email_id" placeholder = "Email" required />
                                            </li>
                                            <li>
                                                <input placeholder = "Subject" type="text" name="subject" required/>
                                            </li>
                                            <li>
                                                <textarea placeholder="Message" name="message" required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" className="flat-button" value="SEND" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact