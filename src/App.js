import { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

export class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const contactsParsed = JSON.parse(contacts);

  //   if (contactsParsed) {
  //     this.setState({ contacts: contactsParsed });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (!this.state.contacts.length) {
  //     localStorage.removeItem('contacts');
  //     return;
  //   }

  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }

  render() {
    // const visebleContacts = contacts.filter(
    //   ({ name, number }) =>
    //     name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
    //     number.includes(filter),
    // );

    return (
      <>
        <h1>Phonebook</h1>
        <div className="container">
          <AddContact onSubmit={this.addNewContact} />
          <Contacts
            onChange={this.changeFilter}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
