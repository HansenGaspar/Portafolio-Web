import ProjectBox from './projectBox.jsx';
import './projects.css';

import H2Tittle from '../../components/H2Tittle.jsx';

//  Importar Jsons
import UltraNoti from '../../json/Proyectos/UltraNoti.json';
import Fakebook from '../../json/Proyectos/Fakebook.json';
import BetterSID from '../../json/Proyectos/BetterSID.json';
import Scrapers from '../../json/Proyectos/Scrapers.json';
import LoginTest from '../../json/Proyectos/LoginTest.json';
import BuscaProductores from '../../json/Proyectos/BuscaProductores.json';

function projects() {
    return (
        <div className="projects mx-4 App">
            <H2Tittle>Proyectos</H2Tittle>
            <div className='flex flex-col m-2 gap-2'>
                <ProjectBox data={Fakebook} />
                <ProjectBox data={UltraNoti} />
                <ProjectBox data={BetterSID} />
                <ProjectBox data={Scrapers} />
                <ProjectBox data={LoginTest} />
                <ProjectBox data={BuscaProductores} />
            </div>
        </div>
    )
}  

export default projects;