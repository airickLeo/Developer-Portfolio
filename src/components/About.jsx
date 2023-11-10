import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"
import { expertise } from "../constants"
import { me } from "../assets"

const Service = (props) => {
    return (
        <Tilt className="xs:w-[250px] w-full mt-6">
            <motion.div
                className="w-full green-pink-gradient rounded-[25px]
                p-[1px]">
                <div className="min-h-[250px] bg-tertiary rounded-[25px]
                items-center py-5 justify-evenly flex flex-col font-bold
                text-gray-200 text-[18px]">
                    <p>{props.title}</p>
                    <img alt={props.title}
                        className='w-24 h-24 object-contain'
                        src={props.icon}
                    />
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    // add framer motion to each of the motion divs
    return (
        <>
            <div className="flex flex-col w-full gap-5 mb-20 mt-32">
                <motion.h2
                    className={`${styles.sectionHeadText}`}>
                    Overview
                </motion.h2>

                <div className="relative flex flex-row w-full md:justify-between justify-start items-center text-gray-300 sm:text-[15px] text-[12.5px] mb-20 gap-16 mt-4">
                    <motion.p
                        className={`leading-7 w-[55%] justify-start lg:pb-[74px]`}>
                        I am a third year Computer Science student at the University
                        of Waterloo who's experienced in JavaScript, React, Node.js,
                        and Express.js. I am a fast learner and self-starter who always
                        wants to pick up new technology and craft something from the ground
                        up. Through my previous internships, I always work closely with other
                        developers and departments, and was recognized for my contributions
                        under the limited time frame of 4 months.
                    </motion.p>
                    <img src={me} alt="photoOfMe" className="rounded-[40px] sm:max-w-[40%] sm:max-h-[280px] max-w-[30%] max-h-[180px] md:mr-3" />
                </div>

                <motion.div
                    className={`${styles.sectionSubText} font-bold mt-20 mx-auto`}>
                    My Expertise
                </motion.div>

                <motion.div
                    className="gap-x-3 gap-y-10 mt-4 flex flex-wrap w-full items-center
                    sm:justify-between justify-center">
                    {expertise.map((service, index) => (
                        <Service key={service.title} {...service}
                            index={index} />
                    ))}
                </motion.div>

            </div>
        </>
    )
}

export default SectionWrapper(About, "about")