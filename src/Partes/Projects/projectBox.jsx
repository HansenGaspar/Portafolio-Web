
import './projectBox.css';
import { Carousel } from 'react-responsive-carousel';
import { useRef, useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProjectBox({ data }) {
    const imgRef = useRef([]);
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

    return (
        <div className="projectBox m-2 border-4 border-[#201c1c] relative overflow-visible mb-10">

            <div className="h-14 bg-[#201c1c]   flex items-center justify-center">
                <span className="tituloProyect  text-3xl text-[#FFFDED] w-full text-center select-none">{data.Nombre}</span>
            </div>

            <div className="flex flex-col">
                {/* Descripción */}
                <div className="w-full flex flex-col justify-center p-2 pl-4">
                    <div className='textProyect py-1 pb-5 font-bold'>
                        {data.Descripcion.split('{aparte}').map((parrafo, idx) => (
                            <p key={idx} className={idx > 0 ? 'mt-4' : ''}>{parrafo}</p>
                        ))}
                    </div>
                    <p className='textProyect p-2 bg-[#FCE762] border-2 border-[#201c1c] font-medium'><span className='text-[#3a3434] resaltar font-normal '>Tecnologias - </span> {tecnologias}</p>
                    {data.Url && (
                        <p className='textProyect py-1 pt-5'>
                            <span className='text-[#3a3434] resaltar'>Link: </span>
                            <a href={data.Url} className='text-[#3a3434]' target="_blank" rel="noopener noreferrer">
                                <span className='clickeable'>Click Aqui!</span>
                            </a>
                        </p>
                    )}
                </div>


                {/* Carrusel solo si hay imágenes */}
                {images.length > 0 && (
                    <div className="w-full border-t-4 border-[#201c1c]">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            showStatus={false}
                            className="custom-carousel"
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button
                                        type="button"
                                        onClick={onClickHandler}
                                        title={label}
                                        className="absolute left-2 top-1/2 z-10 bg-[#FFFDED] border-2 border-[#201c1c] text-[#201c1c] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#201c1c] hover:text-[#FFFDED] transition-colors duration-200 focus:outline-none"
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
                                        className="absolute right-2 top-1/2 z-10 bg-[#FFFDED] border-2 border-[#201c1c] text-[#201c1c] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#201c1c] hover:text-[#FFFDED] transition-colors duration-200 focus:outline-none"
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
                                                ? "inline-block w-3 h-3 mx-1 rounded-full bg-[#201c1c]"
                                                : "inline-block w-3 h-3 mx-1 rounded-full bg-[#201c1c] opacity-30 cursor-pointer"
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
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
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
                                        className="w-full h-full  cursor-zoom-in"

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