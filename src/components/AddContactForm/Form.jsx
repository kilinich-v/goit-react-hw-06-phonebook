import { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export class Form extends Component {
    render() {
        const { handleChange, handleSubmit, state } = this.props;

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                    <span>Name</span>
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        placeholder="John Doe"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    <span>Number</span>
                    <input
                        type="tel"
                        name="number"
                        value={state.number}
                        placeholder="+38..."
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>
                <button className={styles.button} type="submit">Add contact</button>
            </form>
        )
    }
}

Form.propTypes = {
    state: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form
