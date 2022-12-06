import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";

const MealCard = ({meal}) => {
    const navigate = useNavigate();

    return (
        <Col sm={'6'} md={'6'} lg="3">
                <Card className={'mt-2 mb-2'}>
                    <Card.Img variant="top" src={meal.strMealThumb} />
                    <Card.Body>
                        <Card.Title>{meal.strMeal}</Card.Title>
                        <Card.Text>
                            <h5><span className="badge bg-secondary">{meal.strArea}</span> <span
                                className="badge bg-secondary">{meal.strCategory}</span></h5>
                            <Button onClick={() => {navigate('/meal/details/' + meal.idMeal)}}>View Details</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
    )
}

export default MealCard;