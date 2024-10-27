import './estudyBox.css';

function EstudyBox({ data }) {
    return (
        <div className="estudyBox border-4 border-black rounded m-2 p-2">
            <p>{data.Nombre}</p>
            <div className="flex flex-row gap-2 bg-[#201c1c] p-1 text-[#e8e4cc] rounded mx-auto">
                <p>{data.Fecha}</p>
            </div>

            <p>{data.Descripcion}</p>
        </div>
    )
}

export default EstudyBox;