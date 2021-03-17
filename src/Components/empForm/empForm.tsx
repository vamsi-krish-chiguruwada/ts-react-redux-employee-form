import React from "react";
import "./empForm.css";
interface MyState {
    name: string;
    empId: string;
    age: number | null;
  }
interface empFormPropTypes{
    state:MyState,
    setNameValue:(event: React.ChangeEvent<HTMLInputElement>)=>void,
    setEmpidValue:(event: React.ChangeEvent<HTMLInputElement>)=>void,
    setAgeValue:(event: React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmit:(event: React.FormEvent<HTMLInputElement>)=>void
}
class EmpForm extends React.Component<empFormPropTypes> {
  render() {
    return (
        <div className="formContainer">
        <h1>fill employee details</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            required
            type="text"
            onChange={this.props.setNameValue}
            value={this.props.state.name}
            placeholder="Name"
          />

          <input
            required
            type="text"
            onChange={this.props.setEmpidValue}
            value={this.props.state.empId}
            placeholder="employee Id"
          />

          <input
            required
            type="number"
            onChange={this.props.setAgeValue}
            value={Number(this.props.state.age)}
            placeholder="age"
          />

          <input className = "formSubmit" type="submit" value="submit" />
        </form>
      </div>

        // 8*******************************************************************\\
    //   <div className="formContainer">
    //     <h1>fill employee details</h1>
    //     {/* <h1>{store.getState().inputName}</h1> */}
    //     <form onSubmit={this.props.handleSubmit}>
    //       <input
    //         required
    //         type="text"
    //         onChange={this.props.setNameValue}
    //         value={this.props.state.name}
    //         placeholder="Name"
    //       />

    //       <input
    //         required
    //         type="text"
    //         onChange={this.props.setEmpidValue}
    //         value={this.props.state.empId}
    //         placeholder="employee Id"
    //       />

    //       <input
    //         required
    //         type="number"
    //         onChange={this.props.setAgeValue}
    //         value={this.props.state.age}
    //         placeholder="age"
    //       />

    //       <input className = "formSubmit" type="submit" value="submit" />
    //     </form>
    //   </div>
    );
  }
}
export default EmpForm;
