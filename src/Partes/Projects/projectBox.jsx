
import './projectBox.css';
import { Carousel } from 'react-responsive-carousel';
import { useRef, useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProjectBox({ data }) {
    const imgRef = useRef([]);
    const [validImages, setValidImages] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState(null);

    // Debug: mostrar cambios de modalOpen y modalImg en window para inspección
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.__debug_modalOpen = modalOpen;
            window.__debug_modalImg = modalImg;
        }
    }, [modalOpen, modalImg]);

    let tecnologias = '';
    for (let i = 0; i < data.Tecnologias.length; i++) {
        if (i === data.Tecnologias.length - 1) {
            tecnologias += data.Tecnologias[i];
        } else {
            tecnologias += data.Tecnologias[i] + ', ';
        }
    }

    // Usar el array de imágenes si está presente en data.Imagenes
    const base = import.meta.env.BASE_URL || '/';
    //console.log(base);
    let images = [];
    if (Array.isArray(data.Imagenes) && data.Imagenes.length > 0) {
        // Ordenar por el número antes de mapear
        const sorted = [...data.Imagenes].sort((a, b) => {
            const numA = parseInt(a.match(/_(\d+)\./)?.[1] || '0', 10);
            const numB = parseInt(b.match(/_(\d+)\./)?.[1] || '0', 10);
            return numA - numB;
        });
        images = sorted.map(img => `${base.replace(/\/$/, '')}/images/${img}`);
    }

    //console.log(images.length);
    // Solo mostrar imágenes que cargan correctamente
    // Ordenar validImages por el número también
    const sortByNumber = arr => [...arr].sort((a, b) => {
        const numA = parseInt(a.match(/_(\d+)\./)?.[1] || '0', 10);
        const numB = parseInt(b.match(/_(\d+)\./)?.[1] || '0', 10);
        return numA - numB;
    });
    let imagesToShow = (validImages.length === images.length && images.length > 0) ? sortByNumber(validImages) : images;

    return (
        <div className="projectBox m-2 border-4 border-black relative overflow-visible mb-10">

            <div className="h-14 bg-[#201C1C]   flex items-center justify-center">
                <span className="tituloProyect  text-3xl text-[#E8E4CC] w-full text-center select-none">{data.Nombre}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-stretch ">
                {/* Descripción */}
                <div className="md:w-1/2 w-full flex flex-col justify-center p-2 pl-4">
                    <p className='textProyect py-1'>{data.Descripcion}</p>
                    <p className='textProyect p-2 bg-[#ffd44c] border-2 border-[#201C1C] '><span className='text-purple-700 resaltar'>Tecnologias - </span> {tecnologias}</p>
                    {data.Url && (
                        <p className='textProyect py-1'>
                            <span className='text-purple-700 resaltar'>Link: </span>
                            <a href={data.Url} className='text-blue-500' target="_blank" rel="noopener noreferrer">
                                <span className='clickeable'>Click Aqui!</span>
                            </a>
                        </p>
                    )}
                </div>


                {/* Carrusel solo si hay imágenes */}
                {imagesToShow.length > 0 && (
                    <div className="md:w-1/2 w-full flex items-center justify-center bg-[#201C1C] border-t-4 md:border-t-0 md:border-l-4 border-[#201C1C] p-0 m-0 min-h-56 md:min-h-80">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            showStatus={false}
                            className="w-full h-full custom-carousel flex-1"
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        className="absolute left-2 top-1/2 z-10 bg-white border-2 border-black text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none"
                                        style={{ transform: 'translateY(-50%)' }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                                    </button>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <button
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        className="absolute right-2 top-1/2 z-10 bg-white border-2 border-black text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none"
                                        style={{ transform: 'translateY(-50%)' }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
                                    </button>
                                )
                            }
                            renderIndicator={(onClick, isSelected, index, label) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            isSelected
                                                ? "inline-block w-3 h-3 mx-1 rounded-full bg-black"
                                                : "inline-block w-3 h-3 mx-1 rounded-full bg-black opacity-30 cursor-pointer"
                                        }
                                        onClick={onClick}
                                        aria-label={label}
                                        role="button"
                                        tabIndex={0}
                                        style={{ listStyle: 'none' }}
                                    />
                                );
                            }}
                        >
                            {imagesToShow.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="w-full h-56 md:h-80 flex items-center justify-center bg-[#e8e4cc] rounded-none overflow-hidden cursor-zoom-in p-0 m-0"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setModalImg(img);
                                        setModalOpen(true);
                                    }}
                                >
                                    <img
                                        ref={el => imgRef.current[idx] = el}
                                        src={img}
                                        alt={`project-img-${idx}`}
                                        className="object-cover w-full h-full rounded-none transition-all duration-300 pointer-events-none p-0 m-0"
                                        onError={() => {
                                            setValidImages(prev => prev.filter(i => i !== img));
                                        }}
                                        onLoad={() => {
                                            setValidImages(prev => prev.includes(img) ? prev : [...prev, img]);
                                        }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>

            {/* Modal flotante para imagen, renderizado al final para evitar stacking context del carrusel */}
            {modalOpen && modalImg && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" onClick={() => setModalOpen(false)}>
                    <div className="relative max-w-5xl w-[120vw] max-h-[120vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all">&times;</button>
                        <img src={modalImg} alt="Imagen ampliada" className="max-w-full max-h-[95vh] rounded shadow-lg" />
                    </div>
                </div>
            )}


        </div>
    )
}

export default ProjectBox;