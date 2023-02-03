import ChangeRadius from "./RadiusChange"
import { Data } from "./Data"
import React from "react"


class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      window.location.href="?location="+this.state.value
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="loop" onSubmit={this.handleSubmit}>
          <input className="inputSerach" type="text" value={this.state.value} onChange={this.handleChange} />
          <input className="buttonSearch" type="submit" value="" />
        </form>
      );
    }
  }

export default SearchForm
