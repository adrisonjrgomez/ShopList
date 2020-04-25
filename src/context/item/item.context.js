import React, {useState, createContext} from 'react';
import {ItemsData} from './item.data';

import {
  deleteItemFromItems,
  addItemToItems,
  editItemFromItems,
  setDoneItemsToDoneItems,
} from './item.utils';

export const ItemsContext = createContext({
  items: [],
  doneItem: [],
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
  setDoneItem: () => {},
});

export const ItemsProvider = ({children}) => {
  //Spread the provider from Contexts
  const Provider = ItemsContext.Provider;

  //Hook to actual items
  const [items, setItems] = useState(ItemsData);
  const [doneItem, setDoneItems] = useState([]);

  //Method to interact with items
  const deleteItem = id => deleteItemFromItems(id, items, setItems);
  const addItem = text => addItemToItems(text, items, setItems);
  const editItem = item => editItemFromItems(item, items, setItems);
  const setDoneItem = item =>
    setDoneItemsToDoneItems(item, doneItem, setDoneItems, items, setItems);

  const values = {
    items,
    doneItem,
    deleteItem,
    addItem,
    editItem,
    setDoneItem,
  };

  return <Provider value={values}>{children}</Provider>;
};
