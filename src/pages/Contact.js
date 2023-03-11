import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import ContactForm from '../components/Form';

// must include contact information
//    mail address
//    link to a PDF of my CV
//    link to github profile (update your GitHub profile with pinned repositories featuring those same projects)
//    link to linkedin page (must be up to date with my latest skills etc.)
//    must have a contact form for handling events


// function Contact() {
//     return (
//             <Container>
//                 <Row>
//                     <h1>Contact page</h1>
//                 </Row>
//                 <Row>
//                     <Col size="lg-12">
//                         <div>
//                             <p>some text</p>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col size="lg-12">
//                         <div>
//                             <ContactForm />
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//     );
// }

function Contact() {
    return (
            <div className='container'>
                <div className='row text-center'>
                        <h1>Contact page</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className='row'>
                        <div className='col-lg-5'>
                            <p>some text</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Contact;
