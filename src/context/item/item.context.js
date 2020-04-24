import React, {useState, createContext} from 'react';
import {ItemsData} from './item.data';

import {
  deleteItemFromItems,
  addItemToItems,
  editItemFromItems,
} from './item.utils';

export const ItemsContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
  editItem: () => {},
});

export const ItemsProvider = ({children}) => {
  //Spread the provider from Contexts
  const Provider = ItemsContext.Provider;

  //Hook to actual items
  const [items, setItems] = useState(ItemsData);

  //Method to interact with items
  const deleteItem = id => deleteItemFromItems(id, items, setItems);
  const addItem = text => addItemToItems(text, items, setItems);
  const editItem = item => editItemFromItems(item, items, setItems);

  const values = {
    items,
    deleteItem,
    addItem,
    editItem,
  };
  console.log(children);

  return <Provider value={values}>{children}</Provider>;
};
