import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,CardBody,CardText } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish:null
        };
        console.log("constractor is invoked")
    }

    componentDidMount(){
      console.log("componentDidMount is invoked")

    }

    onDishSelect(dish){
      this.setState({selectedDish:dish})
    }

    renderDish(dish){
      if(dish != null){
        return(
           <Card>
             <CardImg width="100%" object src={dish.image} alt={dish.name} />
             <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
             </CardBody>
           </Card>

        );

      }
      else{
         return(
          <div></div> /*this equal to return null*/ 
         );

      }


    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
               <div key={dish.id} className="col-12 col-md-5 m-1"> {/* col-12 small and extra small scren , col-md-5 for the medium */}
                <Card onClick={()=>this.onDishSelect(dish)}>
                  <CardImg width="100%" object src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log("render method has invoked")

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
             {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;