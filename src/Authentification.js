import React, { Component } from "react";
import store from "./store";
import { map } from "lodash";
import { authuser, authuserfalse } from "./actions/auth";
import "./styles.css";

class Authentification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      isAuthe: false
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async event => {
    let { login, password } = this.state;
    event.preventDefault();
    console.log(this.state);
    if (login === "anwar" && password === "kalghoum")
      store.dispatch(authuser());
    else store.dispatch(authuserfalse());

    // await store.dispatch(fetchRecipes());
    this.setState({ mal: store.getState().ingredients });
  };
  render() {
    const { recipes, ingredients } = store.getState();
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          login
          <input
            className="input"
            type="text"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
          />
          <br />
          password
          <input
            className="input"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Validation</button>
        </form>
      </div>
    );
  }
}

export default Authentification;
