import React from 'react';
import './style.css'
import Col from "../Col";

function ProjectCard(props) {
  return (
    <Col size="lg-4 md-6 sm-12" gutter="4">
    <div className="card card border-0">
      <div className="img-container">
        <span>
          <a href={props.link}>
        <img className="card-img-top" alt={props.name} src={props.image} />
        </a>
        </span>
      </div>
      <div className="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
    </Col>
  );
}

export default ProjectCard;
