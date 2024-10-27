import './AboutMe.css'

function AboutMe() {
    return (
        <div className=" my-2 mx-4 p-2 border-4 border-[#201c1c] bg-[#f5f5dc] rounded flex flex-col md:flex-row gap-2  ">
            <div className="flex flex-col">
                <p className="textMe mb-2 font-bold">Buenas a todos, soy <span className="text-[#f30c5d]">Gaspar</span>, un <span className="text-[#348aa7]">desarrollador full-stack</span> junior con experiencia en la creación de aplicaciones web.</p>
                <p className="textMe font-bold">Busco oportunidades para seguir creciendo profesionalmente.</p>
            </div>
        </div>
    )
}

export default AboutMe;