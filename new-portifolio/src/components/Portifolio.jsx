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

const Portifolio = () => {
  // Dados dos projetos
  const projects = [
    {
      id: 1,
      name: "Projeto 1",
      description: "Descrição do Projeto 1",
      link: "https://form-multistep-ecru.vercel.app",
      image: form, // Corrigido para usar a imagem como string
    },
    {
      id: 2,
      name: "Projeto 2",
      description: "Descrição do Projeto 2",
      link: "https://projeto2.com",
      image: "/assets/images/projeto2.png", // Certifique-se que esse caminho é válido
    },
    {
      id: 3,
      name: "Projeto 3",
      description: "Descrição do Projeto 3",
      link: "https://projeto3.com",
      image: "/assets/images/projeto3.png", // Certifique-se que esse caminho é válido
    },
  ];

  return (
    <div>
      <div className="portifolio-container">
        <span>
          <h3>Portifolio</h3>
        </span>
        <nav>
          <a href="#">ALL</a>
          <a href="#">REACT-JS</a>
          <a href="#">JS</a>
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