import React from 'react';
// import PropTypes from 'prop-types';
// import '../styles/app.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleInputChange(event) {
  //   this.setState({
  //     searchText: event.target.value,
  //   });
  // }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            className="searchCity"
            placeholder="Search City..."
            onChange={this.handleInputChange}
            value={this.state.searchText}
          />
      </form>
      </div>
    );
  }
};
    



export default SearchForm; 