import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import { PATH } from '../../constants/navigation';

import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import HeaderTitle from '../../components/HeaderTitle';

const CockatailStack = createStackNavigator();

const CockatailStackNavigation: React.FC = () => (
  <CockatailStack.Navigator>
    <CockatailStack.Screen
      name={PATH.Home}
      component={HomeScreen}
      options={{
        headerShown: false,
      }} />
    <CockatailStack.Screen
      name={PATH.Search}
      component={SearchScreen}
      options={{
        headerTitle: (props) => <HeaderTitle {...props} />,
      }}
    />
  </CockatailStack.Navigator>
);

export default CockatailStackNavigation;
