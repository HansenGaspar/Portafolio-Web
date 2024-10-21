
import EstudyBox from './estudyBox.jsx';

function personalInfo() {
    return (
        <div className="App mx-4">
            <h2 className="text-3xl">Informacion Personal</h2>
            <h3 className="text-2xl m-2">Sobre mi</h3>
            <h3 className="text-2xl m-2">Estudios</h3>
            <div className='flex flex-row m-2 gap-2'>
            <EstudyBox Nombre={"Estudio 1"} fecha={"2020-2021"} descrip={"Descripción"}/>
            <EstudyBox Nombre={"Estudio 2"} fecha={"2020-2021"} descrip={"Descripción"}/>
            </div>
            <h3 className="text-2xl m-2">Contacto</h3>
        </div>
    )
}

export default personalInfo;