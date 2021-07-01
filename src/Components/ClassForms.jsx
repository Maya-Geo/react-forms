import React, { Component } from 'react';

class ClassForms extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          phoneNumber: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState({ [name]: value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          phoneNumber: ""
        })
      }

    render() {
        return (
                 <div style = {{textAlign: "center"}}>
                 <div className="classForm">
        <form onSubmit={this.handleSubmit}>
          <label className="classLabel">
            First Name: <br />
            <input
              className="classInput"
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder={"Maya"}
            />
          </label>
          <br />
          <label className="classLabel">
            Last Name: <br />
            <input
              className="classInput"
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder={"Gee"}
            />
          </label>
          <br />
          <label className="classLabel">
            {" "}
            <br />
            Email: <br />
            <input
              className="classInput"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder={"eg@"}
            />
          </label>
          <br />
          <div>
            <label
              className="classLabel"
            >
              Gender:
            </label>
            <br />
            <select onChange={this.handleChange}
              value={this.state.gender}>
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
            </select>
          </div>
          <label className="classLabel">
            {" "}
            <br />
            Phone Number <br />
            <input
              className="classInput"
              name="phoneNumber"
              type="number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder={"05555555"}
            />
          </label>
          <br /> <br />
          <input className="classSubmit" type="submit" value="Submit" />
        </form>
        </div>
            </div>
        );
    }
}

export default ClassForms;
