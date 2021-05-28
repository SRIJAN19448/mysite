import React from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Legend } from 'reactstrap';
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
                    <h2>Contact</h2>                    <hr />
                </div>
            </div>
            {/* <div className="row row-content">
                <div className="col-12">
                <h3>Heading</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <address>      
                        <i className="fa fa-phone fa-2x"></i> : <a href="tel:+91 9811553181">+91 9811553181</a><br />
                        <i className="fa fa-envelope fa-2x"></i> : <a href="mailto:srijan19448@iiitd.ac.in">srijan19448@iiitd.ac.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    bkdvks
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-linkedin"></i> LinkedIn</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div> */}
            <div className="row row-content">
                {/* <div className="col-12">
                    <h3>Contact Me</h3>
                </div> */}
                <div className="col-12 col-sm-12">
                    <Form>
                        <FormGroup row>
                            <Label htmlFor="name" >Name *</Label>
                            <Col >
                                <Input></Input>
                                <Label size="sm">First Name</Label>
                            </Col>
                            <Col >
                                <Input></Input>
                                <Label size="sm">Last Name</Label>
                            </Col>
                        </FormGroup>
                        <br />
                        <FormGroup row>
                            <Label htmlFor="email" >Email Address *</Label>
                            <Col md={12}>
                                <Input></Input>
                            </Col>
                        </FormGroup>
                        <br />
                        <FormGroup row>
                            <Label htmlFor="subject" >Subject *</Label>
                            <Col md={12}>
                                <Input></Input>
                            </Col>
                        </FormGroup>
                        <br />
                        <FormGroup row>
                            <Label htmlFor="message" >Message *</Label>
                            <Col md={12}>
                                <Input type="textarea"></Input>
                            </Col>
                        </FormGroup>
                        <br />
                        
                    </Form>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;