
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function getIcon(texto) {
    if (texto.toLowerCase().includes("linkedin")) return <FaLinkedin className="w-7 h-7 text-black" />;
    if (texto.toLowerCase().includes("github")) return <FaGithub className="w-7 h-7 text-black" />;
    if (texto.toLowerCase().includes("mail")) return <MdEmail className="w-7 h-7 text-black" />;
    return null;
}

function ContactBox({data}) {
    return (
        <a
            href={data.Url}
            className="m-2 p-2 border-4 border-[#201c1c] bg-[#f5f5dc] flex flex-row items-center gap-2 mx-auto transition duration-200 hover:bg-[#f30c5d] hover:text-white hover:shadow-lg cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <span className="flex items-center gap-2">
                {getIcon(data.Texto)}
                <span className="textProyect">{data.Texto}</span>
            </span>
        </a>
    )
}

export default ContactBox;