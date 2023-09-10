import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"

const About = () => {
    // add framer motion to each of the motion divs
    return (
        <>
            <div className="flex flex-1 flex-col w-full gap-5 max-w-[1600px]">
                <motion.p
                    className={`${styles.sectionSubText} font-bold top-0`}>
                    more about me
                </motion.p>

                <motion.p
                    className={`${styles.sectionHeadText}`}>
                    Overview
                </motion.p>

                <div className="flex flex-row w-full justify-between mt-4 items-center">
                    <motion.p
                    className="leading-7 w-3/5">
                        I am a third year Computer Science student at the University
                        of Waterloo. I am experienced in JavaScript, React, Node.js,
                        and Express.js. I am a fast learner and self-starter who always
                        wants to pick up new technology and craft something from the ground
                        up. Through my previous internships, I always work closely with other
                        developers and departments, and was recognized for my contributions
                        under the limited time frame of 4 months.
                    </motion.p>
                    <motion.p
                    className="max-w-[1792px]">
                        photo
                    </motion.p>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")