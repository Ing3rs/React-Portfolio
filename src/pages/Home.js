import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';


// should be a welcome landing page that contains: 
//    my name
//    a headshot of you (or an avatar)
//    your brand statement
//    some indication that this is your portfolio site


function Home() {
    return (

        <div>
            <Hero>
                <Row>
                    <Col size="lg-8 md-8 sm-12" gutter="4">
                        <div>
                            <h1>Hi there, I'm Claire</h1>
                            <h2>I'm a Freelance Web Developer looking for their next challenge! </h2>
                            <a className="btn contact-button" href="/contact" role="button">Work with me</a>
                            <a className="btn projects-button" href="/projects" role="button">Latest projects</a>
                            <a className="btn cv-button" href="/projects" role="button">My CV</a>
                        </div>
                    </Col>
                    <Col size="lg-4 md-4 sm-12" gutter="4">
                        <div>
                        <img className="logo img-fluid" src="https://github.com/Ing3rs/challenge-3-boostrap-portfolio/raw/main/assets/images/claire-ingram-icon-bear-no-border.png" alt="profile-icon" />
                        </div>
                    </Col>
                </Row>
            </Hero>
        </div>
    );
}

export default Home;


