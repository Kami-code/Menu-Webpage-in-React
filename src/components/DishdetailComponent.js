import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        return (
            <div key = "dish" className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        let comment_fun = comments.map((comment) =>{
            return (
                <div>
                    <li>{comment.comment}</li><br />
                    <li>--{comment.author},{comment.date}</li> <br />
                </div>
        );
        });
        return (
            <div key = "comment" className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comment_fun}
                </ul>
            </div>
        );
    }

    render() {
        if (this.props.selectedDish === null) return (<div></div>);
        else {
            return (
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            );
        }

    }
}

export default DishDetail;