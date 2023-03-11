import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';


// should be a welcome landing page that contains: 
//    my name
//    a headshot of you (or an avatar)
//    your brand statement
//    some indication that this is your portfolio site


function Home() {
    return (

        <div>
            <Hero>
                <Container>
                    <h1>Hi there, I'm Claire</h1>
                    <h2>I'm a Freelance Web Developer looking for their next challenge! </h2>
                    <a className="btn contact-button" href="/contact" role="button">Work with me</a>
                    <a className="btn projects-button" href="/projects" role="button">Latest projects</a>
                </Container>
            </Hero>
        </div>
    );
}

export default Home;


