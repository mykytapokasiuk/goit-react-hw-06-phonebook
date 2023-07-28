import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';
import ContactList from './ContactList/ContactList.js';
import css from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <div className={css.app}>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts.length === 0 ? (
          <p className={css.contactsEmptyText}>The contact list is empty</p>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};

export default App;
