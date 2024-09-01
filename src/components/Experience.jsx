import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"
import { experience } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Ensure the CSS is imported

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
                borderRadius: "18px",
                borderStyle: "none",
                border: "none", 
                boxShadow: "none",  
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ 
                background: experience.iconBg,
            }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.companyName}
                        className='w-[200%] h-[200%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.id}
                </h3>
                <div className="flex w-full">

                </div>
                <p className="text-secondary text-[16px]
        font-semibold mt-4">
                    {experience.companyName}
                </p>
                <ul className="mt-5 list-disc ml-5 space-y-5">
                    {experience.points.map((bulletPoint, index) => (
                        <li key={`experience-bullet-${index}`}
                            className="text-neutral-300 text-[14px] pl-1 tracking-wider">
                            {bulletPoint}
                        </li>
                    ))}
                </ul>
                {/* <p className="text-gray-500 text-[12px] font-semibold mt-10 ml-2">
                    {experience.date}
                </p> */}
            </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <div className="mt-24">
            <div className="w-full">
                <h2 className={`${styles.sectionHeadText} flex`}>
                    Work <span className="ml-2">Experience</span>
                </h2>
            </div>

            <VerticalTimeline>
                {experience.map((item, index) => (
                    <ExperienceCard key={index} experience={item} />
                ))}
            </VerticalTimeline>
        </div>
    )
}

export default SectionWrapper(Experience, "experience")
