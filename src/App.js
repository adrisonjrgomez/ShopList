import React, {useState} from 'react';
import {SafeAreaView, FlatList, Alert} from 'react-native';
import Header from './components/header.component';
import ShopItem from './components/ShopItem.component';
import AddItem from './components/add-item.component';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Eggs'},
    {id: 2, text: 'Bacon'},
    {id: 3, text: 'Cheese'},
    {id: 4, text: 'Steak'},
  ]);
  const deleteItem = id => setItems(items.filter(item => item.id !== id));
  const editItem = itemUpdate => {
    setItems(
      items.map(item => (item.id === itemUpdate.id ? itemUpdate : item)),
    );
  };

  const addItem = text => {
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

  return (
    <SafeAreaView>
      <Header title="Shopping List" />
      <AddItem onAdd={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ShopItem
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onEdit={editItem}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
