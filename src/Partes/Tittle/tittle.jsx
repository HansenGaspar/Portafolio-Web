import AnimatedText from './animatedText.jsx';
import './tittleCss.css';

function tittle() {
    return (
        <div className=' text-center p-2 border-b-4 border-[#000000]  bg-[#201c1c]'>
            <h1 className='Titulo text-4xl md:text-8xl'>El <AnimatedText /> Portafolio</h1>
            <p className='Titulo text-2xl md:text-5xl '>de <span className='text-[#348AA7]'>Hansen Gaspar</span></p>
        </div>
    )
}

export default tittle;