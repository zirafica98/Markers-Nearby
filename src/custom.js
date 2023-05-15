import ChangeRadius from "./RadiusChange"
import { Data } from "./Data"
import React from "react"
import 'font-awesome/css/font-awesome.min.css';


// class SearchForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       window.location.href="?location="+this.state.value
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form className="loop" onSubmit={this.handleSubmit}>
//           <input className="inputSerach" type="text" value={this.state.value} onChange={this.handleChange} />
//           <input className="buttonSearch" type="submit" value="" />
//         </form>
//       );
//     }
//   }

// export default SearchForm
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
      <form className="search" onSubmit={this.handleSubmit}> 
        <div className="search-box">
        <input className="search-txt" type="text" name="" value={this.state.value} onChange={this.handleChange} placeholder="Type to Search"/>
        <a className="search-btn" href="#">
          <i className="fa fa-search"></i>
        </a>
        </div>
      </form>
    );
  }
}

export default SearchForm
