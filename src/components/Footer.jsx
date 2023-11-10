import styles from "../styles"
import { contacts } from "../constants"
import { backToTopIcon } from "../assets"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className={`mx-auto w-full flex bg-nav items-center py-5 min-h-[100px]
         mt-16 ${styles.px}`}>
            <div
                className={`flex flex-row w-full items-center 
        justify-between mx-auto max-w-[1380px] text-[15px] text-secondary h-full`}>
                <p>
                    &copy; Eric Liu 2023
                </p>

                <div className="flex gap-12 items-center">
                    <ul className="flex gap-8">
                        {contacts.map(contact => (
                            <li key={contact.id}>
                                <a href={(contact.id == "email") ? 'mailto:e82liu@uwaterloo.ca' : ((contact.id == "linkedin") ? 'https://www.linkedin.com/in/airick-leo' : 'https://github.com/airickLeo')}
                                    target="_blank">
                                    <img className="w-[25px] h-[25px]" src={contact.svg} alt={contact.id} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Link to={"/"}>
                        <button onClick={() => { window.scrollTo(0, 0) }} className="cursor-pointer outline outline-2 rounded-full outline-white-100 min-h-[45px] min-w-[45px] mr-3">
                            <img src={backToTopIcon} alt="backToTop" className="mx-auto" />
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer