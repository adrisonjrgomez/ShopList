import React, {useState, useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import Header from '../components/header.component';

import Pending from '../components/pending.component';
import Done from '../components/done.component';

const routes = {
  pending: Pending,
  done: Done,
};

const HomePage = () => {
  const [screen, setScreen] = useState('pending');
  let CurrentComponent = routes[screen];
  useEffect(() => {}, [screen, CurrentComponent]);
  return (
    <SafeAreaView>
      <Header title="Shopping Lis" changeScreen={setScreen} />
      <CurrentComponent />
    </SafeAreaView>
  );
};

export default HomePage;
