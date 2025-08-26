


function H2Tittle(props) {
    return (
        <h2 className="Info-h2 text-3xl md:text-4xl  text-[#9368be] bg-[#201c1c] border-y-4 md:border-4 border-black  px-6 py-3 flex items-center md:ml-2 mx-auto mt-4 mb-6  tracking-wide select-none">
            <span className="underline decoration-4 decoration-[#9368be]">{props.children}</span>
        </h2>
    )
}

export default H2Tittle;