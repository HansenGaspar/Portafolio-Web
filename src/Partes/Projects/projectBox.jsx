
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
        <div className="projectBox m-2 p-2 border-2 border-black rounded relative">
            <p className="tituloProyect text-3xl text-[#E8E4CC] bg-[#201C1C] rounded p-2">{data.Nombre}</p>

            <div className="flex flex-col md:flex-row gap-4 items-stretch">
                {/* Descripción */}
                <div className="md:w-1/2 w-full flex flex-col justify-center">
                    <p className='textProyect py-1'>{data.Descripcion}</p>
                    <p className='textProyect py-1'><span className='text-purple-700 resaltar'>Tecnologias:</span> {tecnologias}</p>
                    {data.Url && (
                        <p className='textProyect py-1'>
                            <span className='text-purple-700 resaltar'>Link: </span>
                            <a href={data.Url} className='text-blue-500' target="_blank" rel="noopener noreferrer">
                                <span className='clickeable'>Click Aqui!</span>
                            </a>
                        </p>
                    )}
                </div>
                {/* Línea divisoria */}
                <div className="w-full flex md:hidden my-2">
                    <hr className="w-full border-t-2 border-[#201C1C] opacity-100" />
                </div>
                <div className="hidden md:flex h-auto items-stretch mx-2">
                    <div className="border-l-2 border-[#201C1C]  h-full" style={{ minHeight: '180px' }}></div>
                </div>
                {/* Carrusel solo si hay imágenes */}
                {imagesToShow.length > 0 && (
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            showStatus={false}
                            className="rounded w-full custom-carousel"
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button type="button" onClick={onClickHandler} title={label} className="absolute left-2 top-1/2 z-10 bg-black bg-opacity-80 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
                                        &#8592;
                                    </button>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <button type="button" onClick={onClickHandler} title={label} className="absolute right-2 top-1/2 z-10 bg-black bg-opacity-80 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
                                        &#8594;
                                    </button>
                                )
                            }
                        >
                            {imagesToShow.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="h-56 md:h-80 flex items-center justify-center bg-[#e8e4cc] rounded overflow-hidden cursor-zoom-in"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setModalImg(img);
                                        setModalOpen(true);
                                        //console.log('DIV clickeado:', img);
                                    }}
                                >
                                    <img
                                        ref={el => imgRef.current[idx] = el}
                                        src={img}
                                        alt={`project-img-${idx}`}
                                        className="object-cover w-full h-full rounded transition-all duration-300 pointer-events-none"
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