import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link } from 'react-router-dom';
function Contact(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Heading</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    {/* <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-linkedin"></i> LinkedIn</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Contact;