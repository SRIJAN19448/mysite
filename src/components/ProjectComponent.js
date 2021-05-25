import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function Projects(props) {

    

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Projects</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Projects</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Heading</h2>
                    <p>Para 1</p>
                    <p>Para 2</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;    