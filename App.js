import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '상품A',
    price: '10000',
    imageUrl: 'http://img.danawa.com/prod_img/500000/886/781/img/5781886_1.jpg?shrink=160:160',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '상품B',
    price: '15000',
    imageUrl: 'http://img.danawa.com/prod_img/500000/815/496/img/9496815_1.jpg?shrink=160:160',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '상품C',
    price: '20000',
    imageUrl: 'http://img.danawa.com/prod_img/500000/197/834/img/5834197_1.jpg?shrink=160:160&_v=20180124140135',
  },
];

function Item({ title, price, imageUrl }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Image style={styles.imageUrl} source={{uri:imageUrl}}></Image>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} price={item.price} imageUrl={item.imageUrl} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#ffffff',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    backgroundColor: 'red',
  },
  price: {
    fontSize: 20,
    height: 50,
  },
  imageUrl: {
    width: 50,
    height: 50,
  },
});