import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

function RenderDish({dish}) {
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

function RenderComments({comments}) {
    let comment_fun = comments.map((comment) =>{
        return (
            <div>
                <li>{comment.comment}</li><br />
                <li>--{comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li> <br />
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

const DishDetail = (props) => {
    if (props.dish === null || props.dish === undefined) return (<div></div>);
    else {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments}/>
                </div>
            </div>
        );
    }

}


export default DishDetail;
