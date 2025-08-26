import './AboutMe.css'

function AboutMe() {
    return (
        <div className="my-6 mx-4 p-6 bg-[#FFD54F] border-4 border-[#201c1c] flex flex-col gap-4 h-fit font-bold">
            <div className="flex flex-col">
                <p className="mb-4 text-base md:text-lg text-[#000000] font-bold">
                    <span className="bg-[#f30c5d] text-white px-2 py-1 mr-2 border-2 border-black">¡Hola!</span>
                    Soy <span className="text-[#f30c5d]">Gaspar</span>,
                    <span className="text-[#f30c5d]"> desarrollador full-stack junior</span>
                    <span className="ml-1">con bases solidas tanto en front-end como en back-end.</span>
                </p>

                <p className="mb-4 text-base md:text-lg bg-[#9368be] px-3 py-2 border-2 border-black">
                    Me apasiona crear soluciones eficientes, escalables y fáciles de mantener, priorizando la reutilización del código, la optimización y una experiencia de usuario fluida.
                </p>

                <p className="mb-4 text-base md:text-lg ">
                    Actualmente, busco oportunidades para crecer profesionalmente, aprender de equipos talentosos y aportar valor a través de la tecnología.
                </p>

                <p className="text-base md:text-lg ">
                    Te invito a explorar mis proyectos y descubrir más sobre mi perfil profesional.
                </p>

            </div>
        </div>
    )

}

export default AboutMe;