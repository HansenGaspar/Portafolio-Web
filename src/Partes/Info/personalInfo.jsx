
import EstudyBox from './components/estudyBox.jsx';
import AboutMe from './components/AboutMe.jsx';
import ContactMe from './components/ContactMe.jsx';
import Skills from './components/Skills.jsx';

import './Info.css';

import H2Tittle from '../../components/H2Tittle.jsx';
import H3Tittle from '../../components/H3Tittle.jsx';

// Iconos de react-icons
import { FaUser, FaGraduationCap, FaTools, FaEnvelope } from 'react-icons/fa';

//  Importar Jsons
import Facultad from '../../json/Estudios/Facultad.json';
import Liceo from '../../json/Estudios/Liceo.json';
import Bootcamp from '../../json/Estudios/Bootcamp.json';

function personalInfo() {

    const size = 50;

    return (
        <div className="App mx-4">
            {/* Sección Sobre mí */}
            <div className="mb-8">
                <H2Tittle>
                    <span className="inline-flex items-center gap-2"><FaUser size={size} className="text-base" />Sobre mí</span>
                </H2Tittle>

                <div className="grid grid-cols-1 md:grid-cols-3 my-4 gap-4 items-start">
                    {/* About Me con más espacio */}
                    <div className="md:col-span-2 flex flex-col">
                        <AboutMe />
                    </div>

                    {/* Estudios alineado con About Me */}
                    <div className="md:col-span-1 flex flex-col justify-center h-full bg-[#348aa7] border-4 border-[#201c1c]  p-4">
                        <H3Tittle className="mb-2">
                            <span className="inline-flex items-center gap-2"><FaGraduationCap size={size} className="text-base" />Estudios</span>
                        </H3Tittle>
                        <div className="flex flex-col gap-2">
                            <EstudyBox data={Facultad} />
                            <EstudyBox data={Liceo} />
                            <EstudyBox data={Bootcamp} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Skills */}
            <div className="mb-8">
                <H2Tittle>
                    <span className="inline-flex items-center gap-2"><FaTools size={size} className="text-base" />Habilidades</span>
                </H2Tittle>
                <Skills />
            </div>

            {/* Sección Contacto */}
            <div className="mb-8">
                <H2Tittle>
                    <span className="inline-flex items-center gap-2"><FaEnvelope size={size} className="text-base" />Contacto</span>
                </H2Tittle>
                <ContactMe />
            </div>
        </div>


    )
}

export default personalInfo;