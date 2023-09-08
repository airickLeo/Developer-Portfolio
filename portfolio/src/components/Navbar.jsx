import { useState, useEffect } from "react"
import styles from "../styles"
import { navLinks } from "../constants"
import { logo } from "../assets"
import { Link } from "react-router-dom"

const Navbar = () => {
    // state to keep track which href was clicked
    const [selected, setSelected] = useState("");

    return (
        <nav className={`w-full flex z-20 bg-primary mt-0 fixed items-center`}>
            <div className={`flex flex-row w-full items-center justify-between`}>
                <div className="w-full flex flex-row items-center">
                    <Link to={"/"}
                        className="hover:cursor-pointer">
                        <img src={logo} style={{ width: 90, height: 70 }}
                        onClick={() => {window.scrollTo(0, 0)}} />
                    </Link>
                    <p className="text-gray-200 w-full font-bold text-[17px] flex">
                        Eric Liu &nbsp;
                        <span className="lg:block hidden">
                            | Software Developer
                        </span>
                    </p>
                </div>
                <ul
                    className="flex gap-10 list-none">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`${nav.id == selected ? "text-rose-300" : "text-secondary"} cursor-pointer font-bold
                        hover:text-gray-200 hover:underline`}
                            onClick={() => { setSelected(nav.id) }}>
                            <a href={`#${nav.id}`}> {nav.title} </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar