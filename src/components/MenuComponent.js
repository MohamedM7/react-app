import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,CardBody,CardText } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
               <div key={dish.id} className="col-12 col-md-5 m-1"> {/* col-12 small and extra small scren , col-md-5 for the medium */}
                <Card>
                  <CardImg width="100%" object src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
          </div>
        );
    }
}

export default Menu;