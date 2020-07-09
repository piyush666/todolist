import React, { Component } from "react";
import FlipMove from "react-flip-move";
import { Alert, Col } from "react-bootstrap";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
        this.delete = this.delete.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTask(item) {
        return <div key={item.key} >
            <Alert variant="info"
                onClick={() => this.delete(item.key)}
            >
                {item.text}
            </Alert>
        </div>
    }
    render() {
        var todoEntries = this.props.entries;
        var listItem = todoEntries.map(this.createTask);

        return (

            <Col xs={12}>
                <FlipMove duration={250} easing="ease-out">
                    {listItem}
                </FlipMove>
            </Col>

        );
    }
}
export default TodoItem;