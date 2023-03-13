import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import ContactForm from '../components/Form';
import SkillsCard from '../components/Skills';
import skillsData from "../skills.json";

// must include contact information
//    mail address
//    link to a PDF of my CV
//    link to github profile (update your GitHub profile with pinned repositories featuring those same projects)
//    link to linkedin page (must be up to date with my latest skills etc.)
//    must have a contact form for handling events


// function Contact() {
//     return (
//         <div className='container'>
//             <div className='text-center pb-5'>
//                 <h1>Contact page</h1>
//             </div>
//             <div className='row justify-content-center'>
//                 {/* <div className="d-flex justify-content-center"> */}
//                 <div className='col-lg-5'>
//                     <p>some text</p>
//                 </div>
//                 <div className='col-lg-5'>
//                     <ContactForm />
//                 </div>
//                 <div className='row text-center pt-5'>
//                     <div className='col-12'>
//                         <p>add linkedin etc. here</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

function Contact() {
    const skills = skillsData;

    return (
        <Container>
            <div className='text-center pb-5'>
                <h1>Contact page</h1>
                    <p>Check out my current skillset or drop me an email via the form</p>
            </div>
            <Row>           
                    {skills.map((skill) => (
                        <SkillsCard
                            id={skill.id}
                            key={skill.id}
                            name={skill.name}
                        />
                    ))}
            </Row>
            <Row>
                <div className='text-center pt-5 pb-3'>
                    <h3 className='form-title'>Let's work together!</h3>
                </div>
                <ContactForm />
            </Row>
        </Container>
    );
}

export default Contact;
