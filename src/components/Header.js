import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeSearch, clearSearch } from '../actions/searchAction';

const Header = props => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://media.glassdoor.com/l/6e/04/aa/1e/smartq-logo.jpg"
          alt="SmartQ"
        ></img>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Item"
          value={props.search}
          onChange={e => props.changeSearch(e.target.value)}
        ></input>
      </div>
      <div className="location">
        <i className="icon icon-location-pin"></i>
        <span>Embassy Golf Links</span>
      </div>
      <div className="user">
        <i className="icon icon-user"></i>
      </div>
    </header>
  );
};
Header.propTypes = {
  search: PropTypes.string,
  changeSearch: PropTypes.func
};

const mapStateToProps = state => ({
  search: state.searchChangeReducer
});
export default connect(mapStateToProps, { changeSearch, clearSearch })(Header);
