import './AboutMe.css'

function AboutMe() {
    return (
        <div className="md:my-6 md:mx-4 p-6 bg-[#FFD54F] border-y-4 md:border-4 border-[#201c1c] flex flex-col gap-4 h-fit font-bold">
            <div className="flex flex-col">
                <p className="mb-4 text-base md:text-lg text-[#000000] font-bold">
                    ¡Hola! Soy Gaspar, <span className="text-[#7c3aed]">desarrollador full-stack</span>
                    <span className="ml-1">con bases solidas tanto en front-end como en back-end.</span>
                </p>

                <p className="mb-2 text-base md:text-lg ">
                    Me apasiona crear soluciones eficientes, escalables y fáciles de mantener, priorizando la reutilización del código, la optimización y una experiencia de usuario fluida.
                </p>

                <hr className="border-t-2 border-[#201c1c] my-4" />

                <p className="mb-2 mt-2 text-base md:text-lg ">
                    Actualmente, busco oportunidades para crecer profesionalmente y aportar valor a través de mis conocimientos.
                </p>

                <p className="text-base md:text-lg ">
                    Te invito a explorar mis proyectos y descubrir más sobre mi perfil profesional.
                </p>

            </div>
        </div>
    )

}

export default AboutMe;