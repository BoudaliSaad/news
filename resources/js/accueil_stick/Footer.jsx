import React from 'react'
import { AiFillGithub,AiFillFacebook,AiFillTwitterSquare } from 'react-icons/ai'
// const H4= styled.h4`
// width: 94px;
// height: 42px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 500;
// font-size: 20px;
// line-height: 210%;
// /* identical to box height, or 42px */

// text-align: center;
// letter-spacing: 0.02em;

// color: #FFFFFF;
// `
function Footer() {
    return (
        <div className="row text-white">
            <div className="col-md-4"><ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-dark text-white">Politique de confidentialité</a>
                </li>
                <li>
                    <a href="#!" className="text-dark text-white">Ne vendez pas mes informations</a>
                </li>
                <li>
                    <a href="#!" className="text-dark text-white">personnelles</a>
                </li>
                <li>
                    <a href="#!" className="text-dark text-white">Conditions d'utilisation</a>
                </li>
            </ul></div>
            <div className="col-md-4 mt-4">
                    <a href="#"><h4>news</h4></a>
                    <div className="text-center p-3" style={{background: "rgba(0, 0, 0, 0.2)"}}>
                         © 2023 Copyright:
                    </div>
                    
            </div>
            <div className="col-md-4">
                <h4 className='footer-propos' >À propos</h4>
                <section className="mb-4 d-flex justify-content-center">
                    <div className="m-1"> <AiFillGithub/></div>
                    <div className="m-1"> <AiFillFacebook/></div>
                    <div className="m-1"> <AiFillTwitterSquare/></div>
                

    </section>
            </div>
        </div>
    )
}

export default Footer