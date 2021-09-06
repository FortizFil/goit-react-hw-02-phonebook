import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import ContactForm from './components/ContactForm/contactForm';
import ContactsList from './components/ContactsList/contactsList';
import Filter from './components/Filter/filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = e => {
    const { name, number } = e;
    return {
      id: uuidv4(),
      name: name,
      number: number,
    };
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handlerOnSubmit = e => {
    const newContacts = this.addContact(e);
    const contactName = this.state.contacts.map(contact => contact.name);

    if (contactName.includes(e.name)) {
      alert(`${e.name} is already in contacts`);
    } else {
      const newContactsList = [...this.state.contacts, newContacts];
      this.setState({ contacts: newContactsList });
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handlerOnSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
