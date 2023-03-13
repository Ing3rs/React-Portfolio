import React from 'react';
import './style.css';
import Col from "../Col";

function SkillsCard(props) {
  return (
    <Col size="lg-3 md-6" gutter="3" spaceBetween="0">
    <div className="card skills-card border-0">
      <div className="card-body">
        <h5 class="card-text text-center">{props.name}</h5>
      </div>
    </div>
    </Col>
  );
}

export default SkillsCard;
