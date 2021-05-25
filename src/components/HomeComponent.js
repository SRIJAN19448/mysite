import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null} 
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return(

        <div className="container">
            <div className="row row-content">
                
                <div className="col-12 col-md-6">
                    
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    
                </div>
            </div>
        </div>
    );
}

export default Home;