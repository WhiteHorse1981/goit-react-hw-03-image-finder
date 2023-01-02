import React, { Component } from 'react';
import css from '../components/App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { ThreeDots } from 'react-loader-spinner';
// import { Modal } from './Modal/Modal';
// import axios from 'axios';

export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   ],
  //   filter: '',
  // };

  // handleChange = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // handleSubmit = ({ name, number }) => {
  //   const id = nanoid();
  //   const contactsLists = [...this.state.contacts];

  //   if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     contactsLists.push({ name, id, number });
  //   }

  //   this.setState({ contacts: contactsLists });
  // };

  // handleDelete = elementDeleteId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(
  //       contact => contact.id !== elementDeleteId
  //     ),
  //   }));
  // };

  // getFilteredContacts = () => {
  //   const filterContactsList = this.state.contacts.filter(contact => {
  //     return contact.name
  //       .toLowerCase()
  //       .includes(this.state.filter.toLowerCase());
  //   });

  //   return filterContactsList;
  // };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#3F51B5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={false}
        />
        <Button onLoadMore={() => {}} />
      </div>
    );
  }
}
