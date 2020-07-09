import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { Row, Col, Form, Button } from "react-bootstrap";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: []
        }

    }

    addItem(e) {
        var itemArray = this.state.items;
        if (this._inputElement !== "") {
            itemArray.push({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                items: itemArray
            });
            this._inputElement.value = "";
        }
        console.log(itemArray);
        e.preventDefault();

    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter((item) => item.key !== key);
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <Row className=" mt-3 justify-content-center">
                <Col xs={12} lg={4} >
                    <Form onSubmit={this.addItem}>
                        <Form.Row>
                            <Form.Group as={Col} xs={12} md={11} >

                                <Form.Control type="text" size="lg"
                                    ref={(a) => this._inputElement = a}
                                    placeholder="enter task"
                                />
                            </Form.Group>

                            <Col xs={12} md={1} >
                                <Button variant="info" size="lg" type="submit">add</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    <Row className="mt-3">
                        <TodoItem entries={this.state.items}
                            delete={this.deleteItem} />
                    </Row>
                </Col>

            </Row>

        );
    }
}
export default TodoList;