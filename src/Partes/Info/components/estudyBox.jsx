import './estudyBox.css';

function EstudyBox({ data }) {
    return (
        <div className="estudyBox border-4 border-[#201c1c] bg-[#FFFDED] m-2 p-2">
            <p className='mb-4 text-base md:text-lg text-[#201c1c] font-bold'>{data.Nombre}</p>
            <div className="flex flex-row gap-2 bg-[#201c1c] p-1 text-[#FFFDED]  mx-auto">
                <p>{data.Fecha}</p>
            </div>

            <p className='mb-2 text-base md:text-lg text-[#201c1c] mt-2'>{data.Descripcion}</p>
        </div>
    )
}

export default EstudyBox;