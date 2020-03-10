import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import CockatailStackNavigation from './Navigation/CockatailStackNagivation/CockatailStackNagivation';
import SearchProvider from './components/SearchContext';

const App: React.FC = () => (
  <SearchProvider>
    <NavigationContainer>
      <CockatailStackNavigation />
    </NavigationContainer>
  </SearchProvider>
);

export default App;
