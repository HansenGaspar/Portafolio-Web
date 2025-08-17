import './AboutMe.css'

function AboutMe() {
    return (
        <div className="my-2 mx-4 p-2 border-4 border-[#201c1c] bg-[#f5f5dc] rounded flex flex-col md:flex-row gap-2 h-fit">
            <div className="flex flex-col">
                <p className="textMe mb-2">
                    ¡Hola! Soy <span className="text-[#f30c5d] font-bold">Gaspar</span>, un
                    <span className="text-[#348aa7]"> desarrollador full-stack junior </span>
                     con especial interés en el front-end y una sólida base en back-end.
                </p>
                <p className="textMe mb-2">
                    Me apasiona crear soluciones eficientes, escalables y fáciles de mantener,
                    siempre priorizando la reutilización del código, la optimización y una
                    experiencia de usuario fluida.
                </p>
                <p className="textMe mb-2">
                    Actualmente, estoy en búsqueda de oportunidades que me permitan crecer
                    profesionalmente, aprender de equipos talentosos y aportar valor a través
                    de la tecnología.
                </p>
                <p className="textMe mb-2">
                    Te invito a explorar mis proyectos y descubrir más sobre mi perfil
                    profesional.
                </p>
            </div>
        </div>

    )
}

export default AboutMe;