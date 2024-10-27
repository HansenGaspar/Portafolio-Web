//  TODO: Crear lista de tecnologias
import './projectBox.css';

function ProjectBox({ data }) {
    let tecnologias = '';

    for (let i = 0; i < data.Tecnologias.length; i++) {
        //  Si es el ultimo elemento
        if (i === data.Tecnologias.length - 1) {
            tecnologias += data.Tecnologias[i];
        } else {
            tecnologias += data.Tecnologias[i] + ', ';
        }
    }

    return (
        <div className="projectBox m-2 p-2 border-2 border-black rounded">
            <p className="tituloProyect text-3xl text-[#E8E4CC] bg-[#201C1C] rounded p-2">{data.Nombre}</p>
            <p className='textProyect py-1'>{data.Descripcion}</p>
            <p className='textProyect py-1'><span className='text-purple-700 resaltar'>Tecnologias:</span> {tecnologias}</p>
            <p className='textProyect py-1'>
                <span className='text-purple-700 resaltar'>Link: </span>
                <a href={data.Url} className='text-blue-500' target="_blank">
                    <span className='clickeable'>Click Aqui!</span>
                </a>
            </p>
        </div>
    )
}

export default ProjectBox;