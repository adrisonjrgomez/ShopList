import React, {useContext} from 'react';

import {SafeAreaView, FlatList} from 'react-native';
import Header from '../components/header.component';
import ShopItem from '../components/ShopItem.component';
import AddItem from '../components/add-item.component';
import {ItemsContext} from '../context/item/item.context';

const HomePage = () => {
  const {items} = useContext(ItemsContext);
  const context = useContext(ItemsContext);
  console.log(context);
  return (
    <SafeAreaView>
      <Header title="Shopping List" />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({item}) => <ShopItem key={item.id} item={item} />}
      />
    </SafeAreaView>
  );
};

export default HomePage;
