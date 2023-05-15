import React ,{useContext}from 'react'
import { Container } from 'reactstrap'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { CiExport } from 'react-icons/ci'
import { VscBookmark } from 'react-icons/vsc'

function head_accueil({randomItem}) {
 
   
  return (
    <>
 <Container fluid="xxl">
        <div className='row'>
          <div className='col-sm-6'><img
            src={randomItem.urlToImage}
            className='img-fluid rounded mt-4 '
            alt={randomItem.title}
            style={{
              height: '500px', width: '600px'
            }}
          /></div>
          <div className='col-sm-6'>
            
            <div className='d-flex justify-content-end mt-4'>
              <a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a>
            </div>

            <h3 style={{ color: 'red' }}>Tendance</h3>
            <span style={{ fontFamily: 'IBM Plex Serif', fontSize: '30px', fontStyle: ' normal', lineheight: ' 39px', lineHeight: '30px' }}>{randomItem.title}</span>
            <p>{randomItem.content}</p>
          </div>
        </div>


      </Container>
    </>
  )
}

export default head_accueil