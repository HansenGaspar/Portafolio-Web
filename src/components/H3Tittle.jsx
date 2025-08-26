

function H3Tittle({children}) {
    return (
        <h3 className="Info-h3 text-2xl md:text-3xl  text-[#201c1c] m-2 border-4 border-[#201c1c] bg-[#ffd44c] px-4 py-2 inline-block select-none text-center">
            <span className="font-bold">{children}</span>
        </h3>
    )
}

export default H3Tittle;