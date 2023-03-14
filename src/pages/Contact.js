import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Container from '../components/Container';
import Row from '../components/Row';
import ContactForm from '../components/Form';
import SkillsCard from '../components/Skills';
import skillsData from "../skills.json";


function Contact() {
    const skills = skillsData;

    return (
        <Container>

            {/* title */}
            <div className='text-center pb-5 contact-title'>
                <h1>Contact page</h1>
                <p>Check out my current skillset or drop me an email</p>
            </div>

            {/* display skill cards */}
            <Row>
                {skills.map((skill) => (
                    <SkillsCard
                        id={skill.id}
                        key={skill.id}
                        name={skill.name}
                    />
                ))}
            </Row>

            {/* contact form */}
            <Row>
                <div className='text-center pt-5 pb-3'>
                    <h3 className='form-title'>Let's work together!</h3>
                </div>
                <ContactForm />

                {/* social links */}
                <div className='text-center'>
                    <SocialIcon url="https://github.com/Ing3rs" bgColor="#74838c" style={{ margin: 25 }} />
                    <SocialIcon url="https://www.linkedin.com/in/claire-ingram/" bgColor="#74838c" />
                    <SocialIcon url="https://facebook.com/claire.ingram.52/" bgColor="#74838c" style={{ margin: 25 }} />
                </div>
            </Row>
        </Container>
    );
}

export default Contact;
