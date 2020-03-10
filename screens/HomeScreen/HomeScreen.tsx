import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { PATH } from '../../constants/navigation';

const Touchable: React.ComponentClass<TouchableNativeFeedbackProps> | React.Component<TouchableOpacityProps> =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate(PATH.Search);
  }

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.innerContainer}>
      <Text style={styles.title}>CocktailFinder</Text>
      <Touchable onPress={handleOnPress}>
        <View style={styles.inputWrapper}>
          <Text>Search your favorite cocktail</Text>
        </View>
      </Touchable>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },
  inputWrapper: {
    height: 40,
    width: 300,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
  },
});

export default HomeScreen;