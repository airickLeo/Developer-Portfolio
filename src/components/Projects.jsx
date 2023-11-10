import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"
import { projects } from "../constants"
import Tilt from "react-parallax-tilt"
import { github } from "../assets"

const ProjectCards = (props) => {
    return (
        <div className="">
            <Tilt options={{ max: 45, scale: 1, speed: 450 }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full h-[475px]'>
                <h3
                    className='text-white font-bold text-[20px] text-center'>
                    {props.name}
                </h3>
                <div className='relative w-full h-[250px] mt-3'>
                    <img src={props.image} alt={props.name}
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div
                        className='absolute inset-0 flex justify-end m-3'>
                        <div onClick={() => { window.open(props.source_code_link, "_blank") }}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center
            cursor-pointer items-center'>
                            <img src={github} alt='githubProject' className='w-1/2 h-1/2 object-contain' />

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between h-[135px]">
                    <div
                        className='mt-4'>
                        <p
                            className=' text-secondary text-[14px]'>
                            {props.description}
                        </p>
                    </div>

                    <div className='mt-4 flex flex-wrap gap-2'>
                        {props.tags.map((tag) => (
                            <p key={tag.name}
                                className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>

        </div>
    )
}

const Projects = () => {
    return (
        <div className="w-full flex flex-col mt-24">
            <h2 className={`${styles.sectionHeadText}`}>
                Projects
            </h2>

            <div className="mt-16 flex flex-wrap items-start justify-between gap-7">
                {projects.map((project, index) => (
                    <ProjectCards key={`project-${index}`} {...project} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Projects, "projects")