import React from 'react';
import Hero from '../components/Hero';
import Row from '../components/Row';
import Col from '../components/Col';


function Home() {
    return (
        <div>
            <Hero>
                <Row>
                    <Col size="lg-7 md-8 sm-12" gutter="4">
                        <div>
                            {/* short bio */}
                            <h1>Hi! I'm Claire</h1>
                            <h2>I'm a Web Developer. Feel free to browse my latest projects or get in touch if you'd like to work together</h2>

                            {/* buttons to contact, portfolio and LinkedIn */}
                            <a className="btn contact-button" href="/contact" role="button">Work with me</a>
                            <a className="btn projects-button" href="/projects" role="button">Latest projects</a>
                            <a className="btn cv-button" href="https://www.linkedin.com/in/claire-ingram/" role="button">My CV</a>
                        </div>
                    </Col>

                    {/* icon */}
                    <Col size="lg-5 md-4 sm-0" gutter="4">
                        <div className='logo-div d-none d-md-block'>
                        <img className="logo img-fluid" src="https://github.com/Ing3rs/challenge-3-boostrap-portfolio/raw/main/assets/images/claire-ingram-icon-bear-no-border.png" alt="profile-icon" />
                        </div>
                    </Col>
                </Row>
            </Hero>
        </div>
    );
}

export default Home;
