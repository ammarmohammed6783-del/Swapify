import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function FooterInfo() {
    return (
        <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-900 rounded-md p-5 my-5">
            <p>made to help people trading their things</p>
            <div className="flex gap-3">
                <FaLinkedinIn />
                <FiGithub />
            </div>
        </div>
    )
}

export default FooterInfo