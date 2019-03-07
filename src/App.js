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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
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
  }

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={subscriber}
            placeholder="Enter  Name Here"
            onChange={this.handleChange}
            name="subscriber"
            required
          />
          <input
            type="tel"
            value={number}
            placeholder="Enter Phone Number Here"
            onChange={this.handleChange}
            name="number"
            required
          />

          <button type="submit">Add Subscriber</button>
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
