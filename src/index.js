import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { map } from "lodash";
import { addRecipe, fetchRecipes } from "./actions/recipes";
import Authentification from "./Authentification";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vala: "",
      valb: "",
      mal: ""
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ mal: "d" });
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async event => {
    const a = this.state.vala;
    const b = this.state.valb;
    event.preventDefault();
    console.log(this.state);
    await store.dispatch(addRecipe(a, b));
    await store.dispatch(fetchRecipes());
    this.setState({ mal: store.getState().ingredients });
  };
  render() {
    const { recipes, ingredients } = store.getState();
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="vala"
            value={this.state.vala}
            onChange={this.handleChange}
          />
          <input
            className="input"
            type="text"
            name="valb"
            value={this.state.valb}
            onChange={this.handleChange}
          />
          <button>add</button>
          <p>
            <li>
              {this.state.vala} {this.state.valb}
            </li>
          </p>
          <p>
            {map(this.state.mal, e => (
              <li>{e.recipe}</li>
            ))}
          </p>
        </form>
        <Authentification />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
