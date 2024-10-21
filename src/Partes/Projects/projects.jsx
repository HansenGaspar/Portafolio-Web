import ProjectBox from './projectBox.jsx';

function projects() {
    return (
        <div className="App mx-4">
            <h2 className='text-3xl'>Proyectos</h2>
            <div className='flex flex-col m-2 gap-2'>
            <ProjectBox nombre={"Proyecto 1"} descrip={"Descripción"} url={""} />
            <ProjectBox nombre={"Proyecto 2"} descrip={"Descripción"} url={""} />
            </div>
        </div>
    )
}  

export default projects;