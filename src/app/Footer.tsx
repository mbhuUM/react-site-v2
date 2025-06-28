import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div>
                <a 
                className="inline-flex items-center  gap-2 text-inherit no-underline mr-4"
                href={"https://github.com/mbhuUM"}> <FaGithub /> Github
                </a>

                <a 
                    className="inline-flex items-center  gap-2 text-inherit no-underline mr-4"
                    href={"https://www.linkedin.com/in/michaelhuum/"}> <FaLinkedin /> LinkedIn
                </a>
           </div>
        </footer>
    )
}