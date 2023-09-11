import { motion } from "framer-motion";
import styles from "../styles";

// we can use the id to create a span as href to fast-track to 
// the specific section on the page
const SectionWrapper = (OriginalComponent, id) => {
    return (
        function NewComponent() {
            return (
                <motion.section
                    className={`${styles.padding} z-0 mx-auto relative max-w-[1380px]`}>

                    <span className={`hash-span absolute top-0 max-h-0`} id={id}>&nbsp;</span>
                    <OriginalComponent />
                </motion.section>
            )
        }
    )
}

export default SectionWrapper