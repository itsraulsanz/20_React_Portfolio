import React from 'react';

export default function Card(props) {
var projectImage = '../images/projects/' + props.image;
  return (
      
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={projectImage}
          alt={props.title}
        />
        
      </div>
      <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.description}</p>
          <a href={props.url} className="btn btn-primary">Deployed app</a>
          <a href={props.repo} className="btn btn-primary">Repository</a>
        </div>
    </div>
  );
}
