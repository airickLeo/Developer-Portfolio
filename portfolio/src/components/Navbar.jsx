import { useState, useEffect } from "react"
import styles from "../styles"
import { navLinks } from "../constants"
import { logo } from "../assets"
import { Link } from "react-router-dom"

const Navbar = () => {
    // state to keep track which href was clicked
    const [selected, setSelected] = useState("");
    const [menuOpen, setOpen] = useState(false);

    return (
        <nav className={`w-full flex z-20 bg-primary mt-0 fixed items-center`}>
            <div className={`flex flex-row w-full items-center justify-between mx-auto ${styles.px} py-5
            max-w-5xl`}>
                <div className="w-full flex flex-row items-center">
                    <Link to={"/"}
                        className="hover:cursor-pointer items-center">
                        <img src={logo} className="object-contain max-w-[70px] max-h-[90px]" alt="logo"
                            onClick={() => { window.scrollTo(0, 0), setSelected("") }} />
                    </Link>
                    <p className="text-gray-200 w-full font-bold text-[17px] flex ml-5">
                        Eric Liu &nbsp;
                        <span className="lg:block hidden">
                            | Software Developer
                        </span>
                    </p>
                </div>
                <ul
                    className="gap-10 list-none hidden sm:flex">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`${nav.id == selected ? "text-rose-300" : "text-secondary"} cursor-pointer font-bold
                        hover:text-gray-200 hover:underline`}
                            onClick={() => { setSelected(nav.id) }}>
                            <a href={`#${nav.id}`}> {nav.title} </a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex items-center relative justify-end">
                    <img src={menuOpen ? "../../src/assets/closeButton.png" : "../../src/assets/menu.png"}
                        className={`object-contain w-[28px] h-[28px] cursor-pointer mr-4`}
                        onClick={() => { setOpen(!menuOpen) }} alt="menu-bar" />
                    <div className={`${menuOpen ? "flex" : "hidden"} black-gradient
                    z-10 min-w-[140px] absolute p-6 top-12 right-0 rounded-l-xl`}>
                        <ul className="list-none flex flex-col gap-4 items-start">
                            {navLinks.map((nav, index) => (
                                <li key={`nav-menu-${nav.id}`}
                                    className={`${nav.id == selected ? "text-purple-300" : "text-secondary"} cursor-pointer font-bold
                        hover:text-gray-200 hover:underline`}
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