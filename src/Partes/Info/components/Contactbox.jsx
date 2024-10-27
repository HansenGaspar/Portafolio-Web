
function ContactBox({data}) {
    return (
        <div className="m-2 p-2 border-4 border-[#f30c5d] bg-[#f5f5dc] rounded flex flex-row gap-2 mx-auto ml-4" >
            <p className="textProyect">{data.Texto}</p>
            
            <a href={data.Url} className="text-blue-500 hover:bg-[#f30c5d] hover:rounded" target="_blank"><img src={data.Icono} alt={data.Texto} className="w-8 h-8"/></a>
        </div>
    )
}

export default ContactBox;