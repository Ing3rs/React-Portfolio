import React from 'react';
import ProjectCard from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import projectData from "../projects.json";


function Projects() {
    const projects = projectData;

    return (
        <Container>

            {/* title */}
            <div className="text-center pb-3">
                <h1>Apps I've built</h1>
                <p>Browse through my latest projects below</p>
            </div>

            {/* display project cards */}
            <Row>
                {projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
            </Row>

            {/* link to github */}
            <div className='pt-5'>
                <h5>See my complete portfolio on 
                    <a className='github-link' href='https://github.com/Ing3rs'> GitHub</a>.
                </h5>
            </div>
        </Container>
    );
}

export default Projects;
