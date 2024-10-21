
function ProjectBox({nombre, descrip, url}) {
    return (
        <div className="projectBox m-2 p-2 border-2 border-black rounded">
            <p>{nombre}</p>
            <p>{descrip}</p>
            <p>Link: {url}</p>
        </div>
    )
}

export default ProjectBox;