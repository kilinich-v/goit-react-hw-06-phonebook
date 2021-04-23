import types from './types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const filterContact = value => ({
  type: types.FILTER,
  payload: value,
});
