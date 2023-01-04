import propTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    inputQuery: '',
  };

  onChange = e => {
    const inputValue = e.target.value;
    this.setState({ inputQuery: inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { inputQuery } = this.state;
    if (inputQuery === '') {
      return;
    }
    this.props.onSubmit(inputQuery);
    this.setState({
      inputQuery: '',
    });
  };
  render() {
    const { inputQuery } = this.state;
    const { handleSubmit, onChange } = this;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            value={inputQuery}
            placeholder="Search images and photos"
            onChange={onChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
