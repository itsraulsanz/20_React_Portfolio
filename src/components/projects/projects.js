import React from 'react';
import WorkData from '../../workData.json';
import Card from '../card';
import './projects.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Projects() {
  return (
    <section className='projects'>
      <div className="projects_container">
        <h2 id="projects">Projects</h2>
        <div className="projects_scroll">
          <Carousel>
            {WorkData.portfolio.projects.map((projects) => (
              <Card key={projects.title} title={projects.title} description={projects.description} image={projects.image} technology={projects.technology} url={projects.url} repo={projects.repo} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
