import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddContactForm from './components/AddContactForm';
import Contacts from './components/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);

    if (contactsParsed) {
      this.setState({ contacts: contactsParsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.contacts.length) {
      localStorage.removeItem('contacts');
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addNewContact = data => {
    const { name, number } = data;

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  changeFilter = event => {
    const { value } = event.target;
    console.log(event);
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visebleContacts = contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        number.includes(filter),
    );

    return (
      <>
        <h1>Phonebook</h1>
        <div className="container">
          <AddContactForm onSubmit={this.addNewContact} />
          <Contacts
            contacts={visebleContacts}
            filter={filter}
            onChange={this.changeFilter}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
