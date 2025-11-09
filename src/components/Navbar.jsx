import {NavLink } from "react-router-dom"
import {Seccion1} from "./Seccion1"

export function Navbar () {

    return (
        <>
            <header>
                <div className="header">
                    <img src="./src/assets/logoLautaro.png" alt="" />
                    <h1>PORTFOLIO LAUTARO</h1>
                    <nav>
                        <NavLink to="/aboutMe">About me</NavLink>
                        <NavLink to="/experience">Experience</NavLink>
                        <NavLink to="/skills">Skills</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/certificates">Certificates</NavLink>
                        <NavLink to="/contact">Contact me</NavLink>
                    </nav>
                </div>
            </header>
            <Seccion1/>
        </>
    )

}

export default Navbar