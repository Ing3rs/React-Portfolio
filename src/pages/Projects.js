import React from 'react';
import ProjectCard from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import projectData from "../projects.json";

// must render six instances of the project component dynamically
// be sure to store my project details in a JSON file and import it into my project

// project (on projects page)
//     must be reusable component that ingests JSON file and import it into your project
//     must utilise router props to properly render the right project based on user selection
//     must render the following info: 
//         project title
//         link to the deployed version
//         link to the github repository
//         GIF or screenshot of the deployed application


function Projects() {
    const projects = projectData;

    return (
        <Container>
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
        </Container>
    );
}

export default Projects;
