import AnimatedText from './animatedText.jsx';
import './tittleCss.css';

function tittle() {
    return (
        <div className='text-center m-2'>
            <h1 className='text-5xl'>El <AnimatedText /> Portafolio</h1>
            <p className='text-3xl'>de Hansen Gaspar</p>
        </div>
    )
}

export default tittle;