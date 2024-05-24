import { useGSAP } from "@gsap/react"; // Importa el hook useGSAP de la biblioteca gsap/react
import gsap from "gsap"; // Importa gsap de la biblioteca gsap
import { rightImg, watchImg } from "../utils"; // Importa las imágenes rightImg y watchImg desde el archivo utils
import VideoCarousel from './VideoCarousel'; // Importa el componente VideoCarousel

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 }); // Animación para mostrar el título
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 }); // Animación para mostrar los enlaces con una ligera pausa
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1> {/* Título */}
          
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film {/* Enlace para ver la película */}
              <img src={watchImg} alt="watch" className="ml-2" /> {/* Icono de reloj */}
            </p>
            <p className="link">
              Watch the event {/* Enlace para ver el evento */}
              <img src={rightImg} alt="right" className="ml-2" /> {/* Icono de flecha hacia la derecha */}
            </p>
          </div>
        </div>

        <VideoCarousel /> {/* Renderiza el componente VideoCarousel */}
      </div>
    </section>
  )
}

export default Highlights; // Exporta el componente Highlights
