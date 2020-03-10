import React, { useState, useEffect, useContext } from 'react';
import { cocktailFetch } from '../../api';
import { View, Text, Alert, StyleSheet } from 'react-native';
import CocktailCard from '../../components/CocktailCard';
import SearchContext from '../../components/SearchContext/SearchContext';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const SearchScreen: React.FC = () => {
  const [drinks, setDrinks] = useState<Array<drink>>();
  const { search } = useContext(SearchContext);

  useEffect(() => {
    // cocktailFetch(searchValue)
    cocktailFetch(search)
      .then((data) => {
        setDrinks(data.drinks);
      })
      .catch((err) => console.log(err));

  }, [search]);
  // }, [searchValue]);

  if (!drinks) return null;

  const cocktails = drinks.map((drink) =>
    <CocktailCard key={drink.idDrink} img={drink.strDrinkThumb} name={drink.strDrink} />
  );

  return (
    <ScrollView style={styles.container}>
      {cocktails}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default SearchScreen;