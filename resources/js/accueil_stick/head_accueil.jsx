import React from 'react'
import { Container } from 'reactstrap'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { CiExport } from 'react-icons/ci'
import { VscBookmark } from 'react-icons/vsc'
function head_accueil() {
  return (
    <>
     <Container fluid="xxl">

<div className="d-flex justify-content-between">
  <div>
    <img
      src='https://mdbootstrap.com/img/new/standard/city/044.webp'
      className='img-fluid rounded mt-4 '
      alt='example'
      style={{
        height: '500px', width: '600px'
      }}
    />
  </div>

  <div style={{ marginTop: '20px', width: '650px', height: '400px' }}>
    <div className=''>
      <div className='d-flex flex-row'><span style={{ color: 'red' }}>Tendance</span></div>
      <div className='d-flex flex-row-reverse'>
        <div ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

      </div>
    </div>
    <h3>Tendance</h3>
    <span style={{ fontFamily: 'IBM Plex Serif', fontSize: '30px', fontStyle: ' normal', lineheight: ' 39px', lineHeight: '30px' }}>Maroc-Espagne: Une rencontre entre le Roi Mohammed VI et Pedro Sanchez prévue début février</span>
    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Tempora amet labore aliquam, soluta natus repellat voluptates,
      eaque enim ullam aliquid magnam, quas possimus ea eius. Odit asperiores
      voluptatem architecto vel corrupti enim voluptatibus. Iure deserunt cupiditate sint magnam neque,
      dolorum delectus reiciendis amet eum necessitatibus mollitia tempora minima debitis praesentium
      ducimus architecto non hic repellat vitae, quisquam sequi, error est!.</p>

  </div>

</div>

</Container>
    </>
  )
}

export default head_accueil