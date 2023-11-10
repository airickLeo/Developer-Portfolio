import styles from "../styles";

// we can use the id to create a span as href to fast-track to 
// the specific section on the page
const SectionWrapper = (OriginalComponent, id) => {
    return (
        function NewComponent() {
            return (
                <section
                    className={`${styles.padding} z-0 mx-auto relative max-w-[1380px]`} id={id}>
                    <OriginalComponent />
                </section>
            )
        }
    )
}

export default SectionWrapper