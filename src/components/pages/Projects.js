import React from 'react';
import WorkData from '../../workData.json';
import Card from './Card';

export default function Projects() {
  return (
    <div>
      {WorkData.portfolio.projects.map((projects) => (
        <Card key={projects.title} title={projects.title} description={projects.description} image={projects.image} technology={projects.technology} url={projects.url} repo={projects.repo} />
      ))}
    </div>
  );
}
