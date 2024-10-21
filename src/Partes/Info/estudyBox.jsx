
function EstudyBox({Nombre, fecha, descrip}) { 
    return (
        <div className="estudyBox border-2 border-black rounded m-2 p-2">
            <p>{Nombre}</p>
            <p>{fecha}</p>
            <p>{descrip}</p>
        </div>
    )
}

export default EstudyBox;