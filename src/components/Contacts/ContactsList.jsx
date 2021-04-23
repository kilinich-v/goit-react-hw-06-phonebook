import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import * as actions from '../../redux/actions';

export class ContactsList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={styles.contacts}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>{name}</span>
              <span>{number}</span>
              <button className={styles.button} onClick={() => onDelete(id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items.filter(
    ({ name, number }) =>
      name.toLocaleLowerCase().includes(contacts.filter.toLocaleLowerCase()) ||
      number.includes(contacts.filter),
  ),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
