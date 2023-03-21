import { formToJSON } from "axios";
import React, { Component } from "react";
import Slider from "react-slick";
import {AiFillStar} from'react-icons/ai'
import { Card,CardBody,CardText,CardTitle } from "reactstrap";
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { CiExport } from 'react-icons/ci'
import { VscBookmark } from 'react-icons/vsc'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2 className="head-slid">tendance <AiFillStar/> </h2>
        <Slider {...settings}>
          
          <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
                    <div className="d-inline ">
                        <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
                <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

                    </div>
                    <div>
                        <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
                            <CardBody>
                        
                            <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
                            <CardText>
                            Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>
            </div>
            <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
                    <div className="d-inline ">
                        <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
                <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

                    </div>
                    <div>
                        <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
                            <CardBody>
                        
                            <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
                            <CardText>
                            Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>
            </div>
            <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
                    <div className="d-inline ">
                        <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
                <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

                    </div>
                    <div>
                        <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
                            <CardBody>
                        
                            <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
                            <CardText>
                            Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>
            </div>
            <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
                    <div className="d-inline ">
                        <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
                <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

                    </div>
                    <div>
                        <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
                            <CardBody>
                        
                            <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
                            <CardText>
                            Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
                            </CardText>
                            </CardBody>
                        </Card>
                    </div>
            </div>
                
            </Slider>
        </div>
    );
  }
}
