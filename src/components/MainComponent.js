import React, { Component } from 'react';
import Home from './HomeComponent';
// import Menu from './MenuComponent';
import Contact from './ContactComponent';
// import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Projects from './ProjectComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leaders';
// import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{

  constructor(props) {
    super(props);

    this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }

    // const DishWithId=({match}) => {
    //   return(
    //     <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
    //       comments={this.state.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId,10))}
    //     />
    //   );
    // }

    return (
      <div className="myclass">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> */}
          {/* <Route path="/menu/:dishId" component={DishWithId} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
