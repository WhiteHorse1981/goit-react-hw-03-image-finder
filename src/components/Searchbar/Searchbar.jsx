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

    if (this.state.inputQuery === '') {
      return;
    }
    this.props.onSubmit(this.state.inputQuery);
    this.setState({
      inputQuery: '',
    });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.inputQuery}
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}
