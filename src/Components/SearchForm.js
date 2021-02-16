import React from 'react';
import PropTypes from 'prop-types';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(location) {
    this.setState({
      searchText: location.target.value,
    });
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            className="Enter town or city"
            placeholder="Enter town or city..."
            onChange={this.handleInputChange}
            value={this.state.searchText}
          />
      </form>
      <button className="seachButton"
      onClick={event => {
        event.preventDefault();
        this.props.handleSearchStoresClick(this.state.searchText);
      }}>Search</button>
      </div>
    );
  }
}
SearchForm.propTypes = {
  handleSearchStoresClick: PropTypes.func.isRequired,
};    



export default SearchForm; 