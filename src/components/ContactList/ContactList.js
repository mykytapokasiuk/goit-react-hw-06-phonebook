import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem.js';
import { deleteContact } from 'redux/slices/contactsSlice.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contactsFilter.filter);
  const dispatch = useDispatch();

  const onRemoveContact = contactId => dispatch(deleteContact(contactId));

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return filteredContacts.length === 0 ? (
    <p className={css.contactsEmptyText}>No contact</p>
  ) : (
    <div className={css.container}>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            contactId={id}
            onRemoveContact={onRemoveContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
