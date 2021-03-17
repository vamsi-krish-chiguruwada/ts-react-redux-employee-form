import React from "react";
import "./App.css";
import EmpForm from "./Components/empForm/empForm";

import store from "./redux/reduxForm";
import { submitDetails } from "./redux/reduxForm";
import EmpTable from "./Components/empTable/empTable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface MyState {
  name: string;
  empId: string;
  age: number | null;
}

class App extends React.Component {
  state: MyState = {
    name: "",
    empId: "",
    age: null,
  };

  setNameValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    let temp = { ...this.state };
    // console.log(temp);
    temp.name = event.target.value;
    this.setState(temp);
  };
  setEmpidValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    let temp = { ...this.state };
    temp.empId = event.target.value;
    this.setState(temp);
  };
  setAgeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    let temp = { ...this.state };
    temp.age = Number(event.target.value);
    this.setState(temp);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // ?
    store.dispatch(submitDetails(this.state));
    this.setState({
      name: "",
      empId: "",
      age: null,
    });
    alert("submited successfully");
  };
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">
              <button>home</button>
            </Link>

            <Link to="/table">
              <button>table</button>
            </Link>
          </nav>

          <Switch>
            <Route path="/table">
              <EmpTable store={store} />
            </Route>

            <Route path="/">
              <EmpForm
                state={this.state}
                setNameValue={this.setNameValue}
                setEmpidValue={this.setEmpidValue}
                setAgeValue={this.setAgeValue}
                handleSubmit={this.handleSubmit}
              />
            </Route>
          </Switch>
          {/* <EmpTable store={store}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
