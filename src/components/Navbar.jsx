import logo from "../assets/rsLogo.jpg"
import { FaLinkedin } from "react-icons/fa"
import { FaGit } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="Profile Image" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a target="_blank" href="https://www.linkedin.com/in/rohan-singh-a26968153/"><FaLinkedin /></a>
                <a target="_blank" href="https://github.com/Rohan704532?tab=repositories"><FaGit /></a>
                <a target="_blank" href="https://x.com/rohan704532"><FaTwitterSquare /></a>
            </div>
        </nav>
    )
}

export default Navbar
