import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function About(props) {

    

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                <h3>About</h3>
                <hr />
            </div>
            <div className="row row-content">
                
                <div className="col-12 col-md-3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/srijan.jpg` } height="320"  />
                </div>       
                <div className="col-12 col-md-7">
                    
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis minus quidem minima ratione dolore reiciendis vitae odit voluptatum adipisci? Suscipit recusandae eius vero a quis debitis fuga dolor necessitatibus id sequi est cum ratione quasi quidem perferendis minima obcaecati laudantium repudiandae sit sapiente ipsa rerum quaerat, consequatur reprehenderit. Aut facilis corporis id? Dolore officia eveniet voluptatum labore laboriosam commodi rerum deleniti earum placeat mollitia quae, nam aut aperiam voluptas necessitatibus, asperiores unde nulla sed amet provident tenetur non. Alias, consequatur, accusantium maxime eligendi voluptatem repellat culpa, sunt corrupti sint deleniti molestias. Sint dolor placeat maxime atque a consectetur porro impedit!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis minus quidem minima ratione dolore reiciendis vitae odit voluptatum adipisci? Suscipit recusandae eius vero a quis debitis fuga dolor necessitatibus id sequi est cum ratione quasi quidem perferendis minima obcaecati laudantium repudiandae sit sapiente ipsa rerum quaerat, consequatur reprehenderit. Aut facilis corporis id? Dolore officia eveniet voluptatum labore laboriosam commodi rerum deleniti earum placeat mollitia quae, nam aut aperiam voluptas necessitatibus, asperiores unde nulla sed amet provident tenetur non. Alias, consequatur, accusantium maxime eligendi voluptatem repellat culpa, sunt corrupti sint deleniti molestias. Sint dolor placeat maxime atque a consectetur porro impedit!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis minus quidem minima ratione dolore reiciendis vitae odit voluptatum adipisci? Suscipit recusandae eius vero a quis debitis fuga dolor necessitatibus id sequi est cum ratione quasi quidem perferendis minima obcaecati laudantium repudiandae sit sapiente ipsa rerum quaerat, consequatur reprehenderit. Aut facilis corporis id? Dolore officia eveniet voluptatum labore laboriosam commodi rerum deleniti earum placeat mollitia quae, nam aut aperiam voluptas necessitatibus, asperiores unde nulla sed amet provident tenetur non. Alias, consequatur, accusantium maxime eligendi voluptatem repellat culpa, sunt corrupti sint deleniti molestias. Sint dolor placeat maxime atque a consectetur porro impedit!
                    </p>
                    
                </div>          
            </div>
        </div>
    );
}

export default About;    