// import { formToJSON } from "axios";
// import React, { Component } from "react";
// import Slider from "react-slick";
// import {AiFillStar} from'react-icons/ai'
// import { Card,CardBody,CardText,CardTitle } from "reactstrap";
// import { MdOutlineFavoriteBorder } from "react-icons/md"
// import { CiExport } from 'react-icons/ci'
// import { VscBookmark } from 'react-icons/vsc'
// // import "~slick-carousel/slick/slick.css"; 
// // import "~slick-carousel/slick/slick-theme.css";
// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 2
//     };
//     return (
//       <div>
//         <h2 className="head-slid">tendance <AiFillStar/> </h2>
//         <Slider {...settings}>
          
//           <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
//                     <div className="d-inline ">
//                         <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
//                 <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

//                     </div>
//                     <div>
//                         <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
//                             <CardBody>
                        
//                             <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
//                             <CardText>
//                             Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
//                             </CardText>
//                             </CardBody>
//                         </Card>
//                     </div>
//             </div>
//             <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
//                     <div className="d-inline ">
//                         <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
//                 <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

//                     </div>
//                     <div>
//                         <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
//                             <CardBody>
                        
//                             <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
//                             <CardText>
//                             Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
//                             </CardText>
//                             </CardBody>
//                         </Card>
//                     </div>
//             </div>
//             <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
//                     <div className="d-inline ">
//                         <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
//                 <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

//                     </div>
//                     <div>
//                         <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
//                             <CardBody>
                        
//                             <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
//                             <CardText>
//                             Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
//                             </CardText>
//                             </CardBody>
//                         </Card>
//                     </div>
//             </div>
//             <div style={{height: '200px'}} className="slid-card d-flex justify-content-center">
//                     <div className="d-inline ">
//                         <img className="img-slid"  src="https://picsum.photos/300/200" alt="" />
//                 <div  ><a href="" style={{ marginRight: '10px' }}><CiExport /></a> <a href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /></a> <a href="" style={{ marginRight: '10px' }}><VscBookmark /></a> </div>

//                     </div>
//                     <div>
//                         <Card className="text-right" style={{height:'12rem',border:'none',background:'none'}}>
//                             <CardBody>
                        
//                             <CardTitle tag="h4">Des enquêtes sérologiques sont en cours pour tester les anticorps anti-coronavirus. Quelle est leur utilité ?</CardTitle>
//                             <CardText>
//                             Les autorités espèrent découvrir qu'une proportion importante de la population a déjà été infectée par le virus – et est donc immunisée.
//                             </CardText>
//                             </CardBody>
//                         </Card>
//                     </div>
//             </div>
                
//             </Slider>
//         </div>
//     );
//   }
// }
import React, { useState ,useContext} from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {AiFillStar} from'react-icons/ai';
import {BsArrowRight}from 'react-icons/bs'
import { ApiContext } from "../pagers/Accueil";
/* Install pure-react-carousel using -> npm i pure-react-carousel */


export default function Index() {
    const articlse= useContext(ApiContext);

    return (
        <div className="container mx-auto">
            <h2 className="head-slid">tendance <AiFillStar/> </h2>
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={50} isIntrinsicHeight={true} totalSlides={6} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700 h-20">
                                    {articlse.map((news)=>(
                                        <Slide key={news.title}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={news.urlToImage} alt="black chair and white table" className="object-cover object-center w-full h-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white"></h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-xd text-cyan-500 leading-5 lg:leading-6  group-hover/edit:text-gray-700 text-white">{news.title} </h3>
                                                    <a href="#" className='  text-blue '>savoir plus <BsArrowRight/> </a>
                                                </div>

                                            </div>
                                        </div>
                                    </Slide>
                                    ))}
                                    
                                   
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={10} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        {articlse.map((news)=>(
                                        <Slide key={news.title} >
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={news.urlToImage} alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{news.title}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"> <a href="#" className='  text-blue '>savoir plus <BsArrowRight/> </a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={10} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                {articlse.map((news)=>(
                                        <Slide key={news.title} >
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={news.urlToImage} alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{news.title}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"> <a href="#" className='  text-blue '>savoir plus <BsArrowRight/> </a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    ))}
                                    
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14}  fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}

