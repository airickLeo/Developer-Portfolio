import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"
import { experience } from "../constants";

const ExperienceCard = ({ experience, lastItem }) => {
    return (
        <>
            <div className="bg-tertiary p-10 rounded-3xl max-w-lg">
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
                <p className="text-gray-500 text-[12px] font-semibold mt-10 ml-2">
                    {experience.date}
                </p>
            </div>
        </>
    )
}

const Experience = () => {
    return (
        <div className="mt-24">
            <div className="w-full">
                <h2 className={`${styles.sectionHeadText} gap-x-0.5 flex`}>
                    <p>Work &nbsp;</p>
                    <p>Experience</p>
                </h2>
            </div>

            <div className="mt-20 flex lg:flex-row flex-col items-start gap-20 justify-between">
                {experience.map((item, index) => (
                    <ExperienceCard key={index} experience={item} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Experience, "experience")