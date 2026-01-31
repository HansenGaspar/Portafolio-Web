import './estudyBox.css';

function EstudyBox({ data }) {
    return (
        <div className="estudyBox border-4 border-black bg-[#ffd44c] m-2 p-2">
            <p className='mb-4 text-base md:text-lg text-[#000000] font-bold'>{data.Nombre}</p>
            <div className="flex flex-row gap-2 bg-[#201c1c] p-1 text-[#e8e4cc]  mx-auto">
                <p>{data.Fecha}</p>
            </div>

            <p className='mb-2 text-base md:text-lg text-[#000000] mt-2'>{data.Descripcion}</p>
        </div>
    )
}

export default EstudyBox;