import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Importação dos módulos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// CSS customizado
import "./Portifolio.css";

// Imagens locais
import form from "./images/form.png";
import landingpage from "./images/Landing page.png";
import quiz from "./images/quiz.png";

const Portifolio = () => {
  // Dados dos projetos
  const projects = [
    {
      id: 1,
      name: "Form multistep",
      description: "Formulario multistep totalmente funcional e responsivo",
      link: "https://form-multistep-ecru.vercel.app",
      image: form,
    },
    {
      id: 2,
      name: "Landing page",
      description: "Landing page totalmente responsiva",
      link: "https://landing-page-alpha-eight-66.vercel.app",
      image: landingpage,
    },
    {
      id: 3,
      name: "Quiz",
      description: "Quiz totalmente funcional e interativo",
      link: "https://quiz-react-red.vercel.app",
      image: quiz,
    },
  ];

  return (
    <div>
      <div className="portifolio-container" id="pro">
      <div className="head">
      <span>
          <h3>Portifolio</h3>
        </span>
        </div>  
        <nav>
          <a href="#">ALL</a>
        </nav>

        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination]} // Ativando os módulos necessários
            spaceBetween={30}
            slidesPerView={1}
            navigation // Ativa a navegação (setas)
            pagination={{ clickable: true }} // Ativa a paginação clicável
            loop={true} // Loop infinito
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-slide">
                  <img
                    src={project.image}
                    alt={`Preview do ${project.name}`}
                    className="project-image"
                  />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visite o projeto
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;