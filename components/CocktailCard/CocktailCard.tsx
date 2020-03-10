import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';

interface CocktailCardProps {
  img: string;
  name: string;
};

const CocktailCard: React.FC<CocktailCardProps> = (props) => {
  const { img, name } = props;

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: img }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 100,
    marginVertical: 10,
  },
  text: {
    
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 45,
  }
})

export default CocktailCard;