import React from 'react';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // handleInputChange(event) {
  //   this.setState({
  //     searchText: event.target.value,
  //   });
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            className="Enter postcode"
            placeholder="Enter Postcode..."
            onChange={this.handleInputChange}
            value={this.state.searchText}
          />
      </form>
      <button>Search</button>
      </div>
  );
  }
}
    



export default SearchForm; 