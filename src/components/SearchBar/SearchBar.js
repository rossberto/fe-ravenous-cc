import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];

      return <li className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}</li>;
    });
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(e) {
    const newTerm = e.target.value;
    this.setState({term: newTerm});
  }

  handleLocationChange(e) {
    const newLocation = e.target.value;
    this.setState({location: newLocation});
  }

  handleSearch(e) {
    //const term = e.target.value.term;
    //const location = e.target.value.location;
    //const sortBy = e.target.value.sortBy;
    console.log('en searchYelp de SearchBar term:' + this.state.term + ' location: ' + this.state.location);
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} >Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
