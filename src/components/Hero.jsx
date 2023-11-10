import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"
import { wavingHand } from "../assets"

const Hero = () => {
    return (
        <section
            className="relative mx-auto h-screen w-full min-h-[400px] max-w-[1520px] mb-12">

            <div className={`flex absolute top-[120px] w-full ${styles.heroPX} items-start mt-2 flex-col`}>
                <div className={`flex flex-1 w-full`}>
                    <h1 className={`hidden md:flex blue-text-gradient ${styles.heroHeadText}`}>
                        Hi there, I'm &nbsp;
                        <span className="green-text-gradient">
                            Eric
                        </span>
                    </h1>
                    <h1 className={`md:hidden items-center blue-text-gradient ${styles.heroHeadText}`}>
                        Hi, I'm &nbsp;
                        <span className="green-text-gradient">
                            Eric
                        </span>
                    </h1>
                    <img src={wavingHand} alt="wavingHand"
                        className={`${styles.heroImage} hidden sm:flex items-center object-contain lg:w-[80px] lg:h-[80px]`} />
                </div>

                <div className={`flex heroContact:flex-row flex-col heroContact:items-center items-start justify-between w-full
                max-w-[1600px]`}>
                    <div className={`${styles.heroSubText} text-neutral-300 leading-10 py-6`}>
                        <p className="md:block hidden">
                            I'm a Developer and Data Engineer who loves to bring creative ideas to life
                        </p>
                        <p className="md:hidden block">
                            Developer and Data Engineer
                        </p>
                    </div>
                    <button
                        className="mr-10 heroContact:mt-0 md:mt-12 sm:mt-8 xs:mt-10 mt-3 opacity-80 outline outline-2 outline-neutral-300 rounded-full max-w-[175px] mx-10 lg:mx-2 px-2 py-1
                        hover:bg-white hover:cursor-pointer hover:outline-none heroContact:hidden">
                        <a className={`${styles.heroContact}`} href="#contact">
                            Contact Info
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero