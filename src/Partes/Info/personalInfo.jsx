
import EstudyBox from './components/estudyBox.jsx';
import AboutMe from './components/AboutMe.jsx';
import ContactMe from './components/ContactMe.jsx';

import './Info.css';

import H2Tittle from '../../components/H2Tittle.jsx';
import H3Tittle from '../../components/H3Tittle.jsx';

//  Importar Jsons
import Facultad from '../../json/Estudios/Facultad.json';
import Liceo from '../../json/Estudios/Liceo.json';

function personalInfo() {
    return (
        <div className="App mx-4">
            <H2Tittle>Sobre mi</H2Tittle>

            <div className=' grid grid-cols-1 md:grid-cols-2 my-4'>
                <AboutMe />

                <div className='px-4'>
                    <H3Tittle>Estudios</H3Tittle>

                    <div className='flex flex-col lg:flex-row m-2 gap-2 '>
                        <EstudyBox data={Facultad} />
                        <EstudyBox data={Liceo} />
                    </div>

                </div>

            </div>
            <H2Tittle>Contacto</H2Tittle>
            <ContactMe />
        </div>
    )
}

export default personalInfo;