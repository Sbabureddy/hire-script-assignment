import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "contact",
      subscriber: "",
      number: "",
      subscribers: []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      subscriber: "",
      number: "",
      subscribers: [
        ...this.state.subscribers,
        this.state.subscriber,
        this.state.number
      ]
    });
  };

  handleDelete(val, e) {
    e.preventDefault();
    let contacts = [...this.state.subscribers];
    contacts.filter((contact, idx) => {
      if (idx === val) {
        contacts.splice(idx, 1);
      }
    });
    this.setState({ subscribers: [...contacts] });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { subscriber, number, subscribers } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                value={subscriber}
                placeholder="Enter  Name Here"
                onChange={this.handleChange}
                name="subscriber"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <input
                type="tel"
                value={number}
                placeholder="Enter Phone Number Here"
                onChange={this.handleChange}
                name="number"
                required
                className="form-control"
              />
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Add Subscriber
          </button>
        </form>
        <div>
          <ul>
            {subscribers.map((subscriber, idx) => (
              <li key={idx} onClick={this.handleDelete.bind(this, idx)}>
                {subscriber}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
