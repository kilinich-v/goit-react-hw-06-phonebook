import { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

export class App extends Component {
  render() {
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
