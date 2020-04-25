import React, {useContext, useEffect} from 'react';
import {ItemsContext} from '../context/item/item.context';
import {View, FlatList} from 'react-native';

import ShopItem from '../components/ShopItem.component';
import AddItem from '../components/add-item.component';

export default () => {
  const {items} = useContext(ItemsContext);
  useEffect(() => {}, [items]);

  const renderItem = ({item}) => {
    if (item.status !== 1) {
      return <ShopItem key={item.id} item={item} />;
    }
  };

  return (
    <View>
      <AddItem />
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};
