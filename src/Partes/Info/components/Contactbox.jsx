
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function getIcon(texto) {
    if (texto.toLowerCase().includes("linkedin")) return <FaLinkedin className="w-8 h-8 text-blue-700" />;
    if (texto.toLowerCase().includes("github")) return <FaGithub className="w-8 h-8 text-black" />;
    if (texto.toLowerCase().includes("mail")) return <MdEmail className="w-8 h-8 text-red-500" />;
    return null;
}

function ContactBox({data}) {
    return (
        <div className="m-2 p-2 border-4 border-[#f30c5d] bg-[#f5f5dc] rounded flex flex-row gap-2 mx-auto ml-4" >
            <p className="textProyect">{data.Texto}</p>
            <a href={data.Url} className="text-blue-500 hover:bg-[#f30c5d] hover:rounded" target="_blank" rel="noopener noreferrer">
                {getIcon(data.Texto)}
            </a>
        </div>
    )
}

export default ContactBox;