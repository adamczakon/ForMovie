import React, { Component } from "react";
import { Link } from "react-router-dom";
import FORMOVIELogo from "../image/circle.svg";
import loupe from "../image/search.svg";

export default class Navbar extends Component {
  state = {
    searchQuery: "",
    page: 1
  };

  //set search state
  onChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  render() {
    return (
      <div className='navbar'>
        <a className='navbar-header' href='/formovie/#/'>
          <img className='navbar-header-logo' src={FORMOVIELogo} alt='' />
          <h1 className='navbar-header-title'>ForMovie</h1>
        </a>
        <form className='navbar-search'>
          <input
            onChange={this.onChange}
            type='text'
            placeholder='Find movies...'
            className='navbar-search-input'
          />
          <Link
            className='navbar-search-link'
            to={`/search/${this.state.searchQuery}`}
          >
            <button type='submit' className='navbar-search-button'>
              <img
                className='navbar-search-button-icon'
                src={loupe}
                alt='Search'
              />
            </button>
          </Link>
        </form>
        <div className='navbar-menu' />
      </div>
    );
  }
}
