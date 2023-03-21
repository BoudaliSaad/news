import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { CiExport } from 'react-icons/ci'
import { VscBookmark } from 'react-icons/vsc'
import Cardl from '../accueil_stick/card';
import ContainerS from '../accueil_stick/carousel'
import Footer from '../accueil_stick/Footer'
import Head_accueil from '../accueil_stick/head_accueil'
function Accueil() {
  const col = 6;
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <Head_accueil/>
      <Container fluid='md'>
        <section >
          <div className='title'>
            <span className='title-text'>Derniers articles</span>
          </div>

          <div className="cards">
            <Row >
              <Col md='4'>
                <Cardl />
              </Col>
              <Col md='4'>
                <Cardl />
              </Col>
              <Col md='4'>
                <Cardl />
              </Col>
            </Row>
            <Row ms='3'>
              <Col md='4'>
                <Cardl />
              </Col>
              <Col md='4'>
                <Cardl />
              </Col>
              <Col md='4'>
                <Cardl />
              </Col>
            </Row>


          </div>
          <div class="btn-read text-center">
              <button type="button" class="btn btn-danger" outline rounded>read more</button>
            </div>
        </section>
        <section>
            
            <div className='carousel-news'>
              <ContainerS/>
            </div>
          </section>
            <section>
            <div className='footer bg-black text-center'>
              <Footer/>
            </div>
            </section>
      </Container>
    </div>
  )
}

export default Accueil