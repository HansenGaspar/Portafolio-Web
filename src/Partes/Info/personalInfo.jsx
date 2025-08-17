
import EstudyBox from './components/estudyBox.jsx';
import AboutMe from './components/AboutMe.jsx';
import ContactMe from './components/ContactMe.jsx';
import Skills from './components/Skills.jsx';

import './Info.css';

import H2Tittle from '../../components/H2Tittle.jsx';
import H3Tittle from '../../components/H3Tittle.jsx';

//  Importar Jsons
import Facultad from '../../json/Estudios/Facultad.json';
import Liceo from '../../json/Estudios/Liceo.json';
import Bootcamp from '../../json/Estudios/Bootcamp.json';

function personalInfo() {
    return (
        <div className="App mx-4">
            {/* Sección Sobre mí */}
            <div className="mb-8">
                <H2Tittle>Sobre mí</H2Tittle>

                <div className="grid grid-cols-1 md:grid-cols-3 my-4 gap-4 items-start">
                    {/* About Me con más espacio */}
                    <div className="md:col-span-2 flex flex-col">
                        <AboutMe />
                    </div>

                    {/* Estudios alineado con About Me */}
                    <div className="md:col-span-1 flex flex-col justify-center h-full">
                        <H3Tittle className="mb-2">Estudios</H3Tittle>
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
                <Skills />
            </div>

            {/* Sección Contacto */}
            <div className="mb-8">
                <H2Tittle>Contacto</H2Tittle>
                <ContactMe />
            </div>
        </div>


    )
}

export default personalInfo;