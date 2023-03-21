import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { CiExport } from 'react-icons/ci'
import { VscBookmark } from 'react-icons/vsc'
import { NavLink } from "react-router-dom";

 function cardl(){
    return(
< div className="cardl mt-3">

              <Card>
                <CardImg alt="..." src="https://picsum.photos/300/200" top></CardImg>
                <CardBody>
                  <CardTitle tag="h4">Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </CardText>
                  <div className="card-icon">
                  <NavLink href="" style={{ marginRight: '10px'}}><CiExport /><span className="count">20</span></NavLink> <NavLink href="" style={{ marginRight: '10px' }}><MdOutlineFavoriteBorder /><span className="count">20</span></NavLink> <NavLink href="" style={{ marginRight: '10px' }}><VscBookmark /><span className="count">20</span></NavLink>
                  </div>
                </CardBody>
              </Card>
    </div>
    )
}
export default cardl;