
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

    const size = 30;

    return (
        <div className="App mx-4">
            {/* Sección Sobre mí */}
            <div className="md:mb-8">
                <H2Tittle>
                    <span className="inline-flex items-center gap-2"><FaUser size={size} />Sobre mí</span>
                </H2Tittle>

                <div className="flex flex-col my-4 gap-4">
                    {/* About Me con más espacio */}
                    <div className="flex flex-col">
                        <AboutMe />
                    </div>

                    {/* Estudios alineado con About Me */}
                    <div className="flex flex-col h-full bg-[#c6bebe] border-y-4 md:border-4 border-[#201c1c] p-4 md:m-4">
                        <H3Tittle>
                            <span className="inline-flex items-center gap-2"><FaGraduationCap size={size} />Estudios</span>
                        </H3Tittle>
                        <div className="flex flex-col md:flex-row gap-2">
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
                    <span className="inline-flex items-center gap-2"><FaTools size={size} />Habilidades</span>
                </H2Tittle>
                <Skills />
            </div>

            {/* Sección Contacto */}
            <div className="mb-8">
                <H2Tittle>
                    <span className="inline-flex items-center gap-2"><FaEnvelope size={size} />Contacto</span>
                </H2Tittle>
                <ContactMe />
            </div>
        </div>


    )
}

export default personalInfo;