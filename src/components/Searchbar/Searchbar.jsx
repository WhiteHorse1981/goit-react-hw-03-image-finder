// import propTypes from 'prop-types';
// import React, { Component } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm}>
      <button type="submit" className={css.SearchForm_button}>
        <span className={css.SearchForm_button_label}>Search</span>
      </button>

      <input
        className={css.SearchForm_input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        onChange={onSubmit}
      />
    </form>
  </header>
);
