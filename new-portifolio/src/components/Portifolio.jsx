import React from 'react'
import {register} from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';



//CSS
import './Portifolio.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//images
import form from './images/form.png';

register();

const Portifolio = () => {

    const projects = [
        {
          id: 1,
          name: "Projeto 1",
          description: "Descrição do Projeto 1",
          link: "https://form-multistep-ecru.vercel.app",
          image: {form}, 
        },
        {
          id: 2,
          name: "Projeto 2",
          description: "Descrição do Projeto 2",
          link: "https://projeto2.com",
          image: "/assets/images/projeto2.png",
        },
        {
          id: 3,
          name: "Projeto 3",
          description: "Descrição do Projeto 3",
          link: "https://projeto3.com",
          image: "/assets/images/projeto3.png",
        },
      ];

  return (
    <div>
        <div className="portifolio-container">
            <span><h3>Portifolio</h3></span>
            <nav>
                <a href="#">ALL</a>
                <a href="#">REACT-JS</a>
                <a href="#">JS</a>
            </nav>
            <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
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
  )
}

export default Portifolio