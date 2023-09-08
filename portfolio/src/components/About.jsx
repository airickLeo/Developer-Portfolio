import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { BrowserRouter } from "react-router-dom"
import SectionWrapper from "../hoc/SectionWrapper"

const About = () => {
    return (
        <>
            <p>About</p>
        </>
    )
}

export default SectionWrapper(About, "about")