import {Alert} from 'react-native';

export const deleteItemFromItems = (id, items, setItems) =>
  setItems(items.filter(item => item.id !== id));

export const editItemFromItems = (itemUpdate, items, setItems) => {
  setItems(items.map(item => (item.id === itemUpdate.id ? itemUpdate : item)));
};

export const addItemToItems = (text, items, setItems) => {
  if (!text) {
    Alert.alert('Error', 'Empty Shop Item added. Please type something.', [
      {
        text: 'Understood',
        style: 'cancel',
      },
    ]);
  } else {
    setItems([{id: items.length + 1, text}, ...items]);
  }
};
