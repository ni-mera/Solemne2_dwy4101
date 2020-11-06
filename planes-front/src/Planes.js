import { useEffect, useState } from 'react'
import axios from 'axios'
import { Carousel } from 'react-bootstrap'

const PlanComponent = () => {
    const [planes, setPlanes] = useState([]);

    //listener onChange
    useEffect(() => {
        axios
        .get('http://localhost:8000/planes/?format=json')
        .then((response) => {
            console.log('Planes: ', response.data);
            setPlanes(response.data);           
        })
        .catch((error) => console.log(error));
    }, []);

    const renderPlanes = (plan) => {
        return (
        <Carousel.Item key = {plan.id}>
            <img
              className="d-block w-100"
              src={plan.image}
              alt={plan.id}
            />
            <Carousel.Caption>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <p>Valor: ${plan.price}</p>
            </Carousel.Caption>
        </Carousel.Item>
        );
    }

    return (
        <div className="container">
            <Carousel>
                {planes.map(renderPlanes)}
            </Carousel>
        </div>
        );
}

export default PlanComponent;