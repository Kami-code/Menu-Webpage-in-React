import React, {Component} from 'react'
import {Jumbotron, Navbar, NavbarBrand} from 'reactstrap'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">网站首页</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header