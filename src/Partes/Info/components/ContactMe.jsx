import ContactBox from "./Contactbox";

import Linkedin from '../../../json/Contacto/linkedin.json';
import Mail from '../../../json/Contacto/Mail.json';
import Github from '../../../json/Contacto/github.json';

function ConctactMe() {
    return (
        <div className="m-2 p-2 px-4 bg-[#ffd44c] border-4 border-[#000000] flex  flex-col md:flex-row gap-2 mx-auto md:ml-4">
            <ContactBox data={Linkedin} />
            <ContactBox data={Github} />
            <ContactBox data={Mail} />
        </div >
    )
}

export default ConctactMe;