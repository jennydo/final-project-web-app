import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RandomRecipes = () => {
    return(
        // <div className="row">
        //     <div className="col-sm-4">
        //         <div className="card">
        //             <img src="https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg" alt="..."/>
        //             <div className="card-body">
        //                 <h5 className="card-title">Eton Mess</h5>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="col-sm-4">
        //         <div className="card">
        //             <div className="card">
        //                 <img src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" className="float-start" alt="..."/>
        //                 <div className="card-body float-end">
        //                     <p className="card-title">Eton Mess</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="col-sm-4">
        //         <div className="card">
        //             <div className="card">
        //                 <img src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" className="float-start" alt="..."/>
        //                 <div className="card-body float-end">
        //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk
        //                         of the card's content.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Row>
            <Col sm={'6'} md={'6'} lg="4">
                    <Card>
                        <Card.Img variant="top" src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            <Col sm={'6'} md={'6'} lg="4">
                <Card>
                    <Card.Img variant="top" src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4" className="d-none d-lg-block">
                <Card>
                    <Card.Img variant="top" src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default RandomRecipes;