import { useState, useEffect } from "react"
import styles from "../styles"
import { navLinks } from "../constants"
import { logo, burgerMenu, closeButton } from "../assets"
import { Link } from "react-router-dom"

const Navbar = (props) => {
    // state to keep track which href was clicked
    const [selected, setSelected] = useState("");

    // toggle menu on small devices
    const [menuOpen, setOpen] = useState(false);

    return (
        <nav className={`${styles.px} mx-auto mt-0 w-full flex bg-nav fixed items-center py-5 z-20`}>
            <div
                className={`flex flex-row w-full items-center 
        justify-between mx-auto max-w-[1380px]`}>
                <div className="w-full flex flex-row items-center">
                    <Link to={"/"}
                        className="hover:cursor-pointer items-center">
                        <img src={logo} className="object-contain max-w-[70px] max-h-[70px]" alt="logo"
                            onClick={() => { window.scrollTo(0, 0), setSelected("") }} />
                    </Link>
                    <p className="text-gray-200 font-bold text-[17px] flex ml-5">
                        Eric Liu &nbsp;
                        <span className="lg:block hidden">
                            | Software Developer
                        </span>
                    </p>
                </div>

                <ul
                    className="gap-10 list-none hidden heroContact:flex">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`${nav.id == props.currSection ? "text-rose-300" : "text-secondary"} cursor-pointer font-bold hover:text-gray-200 `}
                            onClick={() => {  }}>
                            <a href={`#${nav.id}`}> {nav.title} </a>
                        </li>
                    ))}
                </ul>

                <div className="heroContact:hidden flex items-center relative justify-end">
                    <img src={menuOpen ? closeButton : burgerMenu}
                        className={`object-contain w-[28px] h-[28px] cursor-pointer mr-4`}
                        onClick={() => { setOpen(!menuOpen) }} alt="menu-bar" />
                    <div className={`${menuOpen ? "flex" : "hidden"} black-gradient
                    z-10 min-w-[140px] absolute p-6 top-12 right-0 rounded-l-xl`}>
                        <ul className="list-none flex flex-col gap-4 items-start">
                            {navLinks.map((nav, index) => (
                                <li key={`nav-menu-${nav.id}`}
                                    className={`${nav.id == props.currSection ? "text-purple-300" : "text-secondary"} cursor-pointer font-bold
                        hover:text-gray-200`}
                                    onClick={() => { setSelected(nav.id), setOpen(!menuOpen) }}>
                                    <a href={`#${nav.id}`}> {nav.title} </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar