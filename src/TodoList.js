import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

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
            items : filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter task" />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItem entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );
    }
}
export default TodoList;