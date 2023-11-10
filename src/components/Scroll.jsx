import styles from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { useState, useEffect } from "react";

const Scroll = (props) => {
    return (
        <section className="fixed bottom-0 right-14 z-100">
            {props.currSection}
        </section>
    )
}

export default Scroll