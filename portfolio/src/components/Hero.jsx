import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"
import { wavingHand } from "../assets"

const Hero = () => {
    return (
        <section
            className="relative mx-auto h-screen w-full">

            <div className={`flex absolute top-[120px] w-full ${styles.heroPX} items-start mt-2 flex-col`}>
                <div className={`flex flex-1 w-full`}>
                    <p className={`hidden md:flex blue-text-gradient ${styles.heroHeadText}`}>
                        Hi there, I'm &nbsp;
                        <span className="green-text-gradient">
                            Eric
                        </span>
                    </p>
                    <p className={`md:hidden items-center blue-text-gradient ${styles.heroHeadText}`}>
                        Hi, I'm &nbsp;
                        <span className="green-text-gradient">
                            Eric
                        </span>
                    </p>
                    <img src={wavingHand} alt="wavingHand"
                        className={`${styles.heroImage} hidden sm:flex items-center object-contain lg:w-[80px] lg:h-[80px]`} />
                </div>

                <div className={`flex flex-1 items-center mt-4 justify-between w-full
                max-w-[1600px]`}>
                    <p className={`${styles.heroSubText} text-neutral-300 leading-10 py-6`}>
                        I'm a Developer and Data Engineer who loves to bring creative ideas to life
                    </p>

                    <button
                    className="resumeDownload">
                        Download Here
                    </button>

                </div>
            </div>

        </section>
    )
}

export default Hero