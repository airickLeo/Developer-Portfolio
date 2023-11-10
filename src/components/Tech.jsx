import SectionWrapper from "../hoc/SectionWrapper"
import { technologies } from "../constants"
import styles from "../styles"
import { useState } from "react"

const HoverInfo = (item) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    return (
        <div>
            <img key={item.name} alt={item.name} src={item.icon}
                className="object-contain w-[86px] h-[86px] bg-gray-300 
                        p-2 rounded-full" onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={handleMouseMove} />
            <div className="text-[14px] text-gray-200">
                {hovered && (
                    <div style={{
                        position: 'fixed',
                        top: position.y + 10, // Adjust the position as needed
                        left: position.x + 10, // Adjust the position as needed
                        padding: '5px',
                        border: '1px solid #ccc',
                        borderRadius: "8px",
                        background: "gray"
                    }}>
                        {item.name}
                    </div>
                )}
            </div>
        </div>
    )
}

const Tech = () => {
    return (
        <div className="mt-32">
            <p className={`${styles.sectionSubText} font-bold text-center`}>Technologies I Use </p>
            <div className="w-full flex flex-wrap items-center 
            justify-center gap-8 mt-20 md:px-[120px] px-[60px]">
                {technologies.map((tech, index) => (
                    <HoverInfo {...tech} key={tech.name} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Tech, "technologies")